let ignoreMergeField = new Set<string>([
    "ver",
    "importer"
]);

export function MergeField(source: any, target: any) {
    for (const key in target) {

        if (ignoreMergeField.has(key)) {
            continue;
        }

        const element = source[key];
        if (element === undefined) {
            continue;
        }
        target[key] = element;
    }
}