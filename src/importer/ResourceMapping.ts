import { randomUUID } from "crypto";
import { lstatSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { readJsonSync } from "fs-extra";
import { glob } from "glob";
import path from "path";
import { ImportMode } from "./define";
import { GetMetaConvertFactory } from "../MetaConvert/MetaConvertFactory";
import { SpriteFrameMapping } from "../MetaConvert/SpriteFrameMapping";
import { GetFileConvert } from "../FileConvert/FileConvertFactory";

export class ResourceState {
    public UUIDToMetaPath = new Map<string, string>();
    public UUIDToFilePath = new Map<string, string>();
    public PathToUUID = new Map<string, string>();
    public FileUUIDMap = new Map<string, any>(); // UUID : Loaded Object
    public MetaUUIDMap = new Map<string, any>(); // UUID : Loaded Object

    constructor() { }

    public CloneState(): ResourceState {

        let result = new ResourceState();

        result.UUIDToMetaPath = new Map(this.UUIDToMetaPath);
        result.UUIDToFilePath = new Map(this.UUIDToFilePath);
        result.PathToUUID = new Map(this.PathToUUID);
        result.FileUUIDMap = new Map(this.FileUUIDMap);
        result.MetaUUIDMap = new Map(this.MetaUUIDMap);

        return result;
    }
}

export class ResourceMapping extends ResourceState {

    private rootPath = "";

    public SpriteFrameMapping = new SpriteFrameMapping();

    public PreloadFile(root: string) {
        this.rootPath = root;
        this.loadFiles();
    }

    private loadFiles() {
        let files = glob.sync("**/*", {
            cwd: this.rootPath,
        });

        let regex = new RegExp("(.+)\.meta$");
        let metaFiles = files.filter((o) => regex.test(o));
        let normalFiles = files.filter((o) => !regex.test(o));

        for (const metaPath of metaFiles) {
            let absPath = path.join(this.rootPath, metaPath);
            let meta = readJsonSync(absPath);
            let uuid = meta.uuid;
            this.UUIDToMetaPath.set(uuid, metaPath);
            this.MetaUUIDMap.set(uuid, meta);

            let filePath = regex.exec(metaPath)?.at(1);
            if (filePath !== undefined) {
                this.PathToUUID.set(filePath, uuid);
            }
        }

        for (const filePath of normalFiles) {
            let absPath = path.join(this.rootPath, filePath);
            if (lstatSync(absPath).isDirectory()) {
                continue;
            }

            let buffer = readFileSync(absPath);
            let data;
            try {
                let js = buffer.toString();
                data = JSON.parse(js);
            } catch (e) {
                data = buffer;
            }

            let uuid = this.PathToUUID.get(filePath);

            if (uuid === undefined) {
                uuid = randomUUID();
            }

            this.UUIDToFilePath.set(uuid, filePath);
            this.FileUUIDMap.set(uuid, data);
        }
    }

    /**
     * Meta 匯入應優先於檔案匯入，僅導入 Meta 映射
     * @param root 當前本地跟目錄
     * @param source 匯入資源資訊
     * @param mode 導入資源的方式
     */
    public MergeMeta(source: ResourceMapping, mode: ImportMode) {
        let filter = (uuid: string, meta: any) => true;
        switch (mode) {
            case ImportMode.Import:
                filter = (uuid, meta) => {
                    let localFile = this.MetaUUIDMap.get(uuid);
                    return localFile === undefined;
                };
                break;
            default:
                break;
        }

        source.MetaUUIDMap.forEach((meta, uuid) => {
            if (filter(meta, uuid)) {
                this.importMeta(uuid, meta, source);
            }
        });
    }

    private importMeta(uuid: string, meta: any, source: ResourceMapping) {

        let convert = GetMetaConvertFactory(meta, this.SpriteFrameMapping);
        let newMeta = convert.ConvertMeta();

        this.MetaUUIDMap.set(uuid, newMeta);

        let metaPath = source.UUIDToMetaPath.get(uuid);
        this.UUIDToMetaPath.set(uuid, metaPath as string);

        let filePath = metaPath?.replace(".meta", "");
        this.PathToUUID.set(filePath as string, uuid);
    }

    private deleteExistFiles(uuid: string) {
        let path = this.UUIDToFilePath.get(uuid);

        this.UUIDToFilePath.delete(uuid);
        this.UUIDToMetaPath.delete(uuid);
        this.FileUUIDMap.delete(uuid);
        this.MetaUUIDMap.delete(uuid);

        if (path !== undefined) {
            this.PathToUUID.delete(path);
        }
    }

    /**
     * 本地資源匯入流程
     * @param source 
     * @param mode 
     */
    public MergeFiles(source: ResourceMapping, mode: ImportMode) {
        switch (mode) {
            case ImportMode.Import:
                this.mergeNotExistFiles(source);
                break;
            case ImportMode.Replace:
                this.mergeAllFiles(source);
                break;
            default:
                break;
        }
    }

    private mergeNotExistFiles(source: ResourceMapping) {
        // 使用匯入檔案目錄遍歷、若本地沒有執行匯入
        for (const iterator of source.FileUUIDMap) {
            let importUUID = iterator[0];

            let localFile = this.FileUUIDMap.get(importUUID);
            if (localFile !== undefined) {
                return;
            }

            this.importFile(importUUID, source);
        }
    }

    private mergeAllFiles(source: ResourceMapping) {
        // 匯入所有檔案
        for (const iterator of source.FileUUIDMap) {
            let importUUID = iterator[0];
            this.importFile(importUUID, source);
        }
    }

    private importFile(importUUID: string, source: ResourceMapping) {
        let sourceFile = source.FileUUIDMap.get(importUUID);
        let sourcePath = source.UUIDToFilePath.get(importUUID) as string;

        let convert = GetFileConvert(sourcePath, sourceFile, this.SpriteFrameMapping);
        let result: any;
        if (convert === undefined) {
            result = sourceFile;
        } else {
            result = convert.Convert();
        }

        this.FileUUIDMap.set(importUUID, result);
        this.UUIDToFilePath.set(importUUID, sourcePath);
    }

    public SaveFile(uuid: string, filePath: string) {

        // console.log("save file", uuid, filePath);
        // return;

        let savePath = path.join(this.rootPath, filePath);
        let file = this.FileUUIDMap.get(uuid);

        // buffer 類型的檔案直接儲存
        if (Buffer.isBuffer(file)) {
            this.saveFile(savePath, file);
        } else {
            let fileData = JSON.stringify(file);
            this.saveFile(savePath, fileData);
        }

        let meta = this.MetaUUIDMap.get(uuid);
        let metaJson = JSON.stringify(meta);
        savePath = savePath + ".meta";
        this.saveFile(savePath, metaJson);
    }

    private saveFile(savePath: string, data: any) {
        let dir = path.dirname(savePath);
        mkdirSync(dir, { recursive: true });
        writeFileSync(savePath, data);
    }
}