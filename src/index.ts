import { ImportMode } from "./importer/define";
import { ImportArgs, StartConvert } from "./importer/import";

let args: ImportArgs = {
    LocalPath: "E:\\Creator\\TestV2\\assets",
    TempPath: "E:\\Creator\\TestV2\\assets",
    SourcePath: "C:\\Users\\chengrongsun\\Downloads\\Package_04.zip",
    ImportMode: ImportMode.Replace
};

StartConvert(args);
