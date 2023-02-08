import { ImportMode } from "./importer/define";
import { ImportArgs, StartConvert } from "./importer/import";

let args: ImportArgs = {
    LocalPath: "C:\\Users\\chengrongsun\\.CocosCreator\\packages\\creator-transfer\\demo\\v2",
    TempPath: "C:\\Users\\chengrongsun\\.CocosCreator\\packages\\creator-transfer\\demo\\v3",
    SourcePath: "C:\\Users\\chengrongsun\\.CocosCreator\\packages\\creator-transfer\\demo\\Raw\\升降測試用3版檔案.zip",    
    ImportMode: ImportMode.Replace
};

StartConvert(args);
