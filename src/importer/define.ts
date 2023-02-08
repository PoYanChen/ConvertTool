
export enum ImportMode {
    Import, // 若本地 UUID 有找到則略過
    Replace, // 全部導入、覆蓋已存在的檔案
    // Merge, // 僅進行屬性更新
}