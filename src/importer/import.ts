import { ResourceMapping } from "./ResourceMapping";
import { ImportMode } from "./define";
import path from "path";
import { readFileSync, writeFileSync, ensureDir } from "fs-extra";
import { JSZipObject } from "../../node_modules/jszip/index";

let JSZIP = require("jszip")

export interface ImportArgs {
    LocalPath: string; // 本地根目錄(絕對路徑)
    TempPath: string; // 暫存路徑(絕對路徑)
    SourcePath: string; // 來源檔案目錄(絕對路徑)
    ImportMode: ImportMode; // 導入模式
}

async function saveZipFile(savePath: string, data: JSZipObject) {
    let dir = path.dirname(savePath);
    await ensureDir(dir);

    if (data.dir === false) {
        let buffer = await data.async("nodebuffer");
        writeFileSync(savePath, buffer);
    }
}

// 導入方法主函數
export async function StartConvert(args: ImportArgs) {

    if (args.TempPath === undefined) {
        args.TempPath = path.join(args.LocalPath);
    }

    let zip = new JSZIP();
    let sourcePath = args.SourcePath;
    if (sourcePath.endsWith("zip")) {
        try {
            let file = readFileSync(sourcePath);
            await zip.loadAsync(file);
            for (const key in zip.files) {
                const element = zip.files[key];
                let savePath = path.join(args.TempPath, key);
                await saveZipFile(savePath, element);
            }
            sourcePath = args.TempPath;
        } catch (error) {
            console.error("unzip fail");
            console.error(error);
            return;
        }
    }

    // 導入資源路徑
    let resource = new ResourceMapping();
    resource.PreloadFile(sourcePath);

    let localResource = new ResourceMapping();
    localResource.PreloadFile(args.LocalPath);

    let localState = localResource.CloneState();
    localResource.MergeMeta(resource, args.ImportMode);
    localResource.MergeFiles(resource, args.ImportMode);

    // console.log("SourceData", resource);
    // console.log("LocalResult", localResource);

    for (const iterator of localResource.FileUUIDMap) {
        let uuid = iterator[0];
        let sourceFile = localState.FileUUIDMap.get(uuid);

        switch (args.ImportMode) {
            case ImportMode.Import:
                if (sourceFile !== undefined) {
                    continue;
                }
                break;
            default:
                break;
        }

        let path = localResource.UUIDToFilePath.get(uuid);
        if (path === undefined) {
            path = resource.UUIDToFilePath.get(uuid);
        }

        if (path === undefined) {
            console.error("not find file path uuid :", uuid);
            continue;
        }

        localResource.SaveFile(uuid, path);
    }
}