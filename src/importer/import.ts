import decompress from "decompress";
import { ResourceMapping } from "./ResourceMapping";
import path from "path";
import { ImportMode } from "./define";


export interface ImportArgs {
    LocalPath: string; // 本地根目錄(絕對路徑)
    TempPath: string; // 暫存路徑(絕對路徑)
    SourcePath: string; // 來源檔案目錄(絕對路徑)
    ImportMode: ImportMode; // 導入模式
}

// 導入方法主函數
export async function StartConvert(args: ImportArgs) {

    if (args.TempPath === undefined) {
        args.TempPath = path.join(args.LocalPath);
    }

    let sourcePath = args.SourcePath;
    if (sourcePath.endsWith("zip")) {
        try {
            await decompress(sourcePath, args.TempPath);
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