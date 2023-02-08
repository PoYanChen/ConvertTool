import { ImportMode } from "./importer/define";
import { ImportArgs, StartConvert } from "./importer/import";

let args: ImportArgs = {
    LocalPath: "E:\\Creator\\TestV2\\assets",
    TempPath: "E:\\TypeScript\\temp",
    SourcePath: "E:\\TypeScript\\升降測試用3版檔案.zip",
    ImportMode: ImportMode.Replace
};

StartConvert(args);
