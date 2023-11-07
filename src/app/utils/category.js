export function findCategoryById(root, id) {
    const queue = [];

    queue.push(...root);

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node)
        if (node.id == id) return node;

        if (node.subCategories && node.subCategories.length > 0) queue.push(...node.subCategories);
    }
}

export function findCategoryIdWithPath(tree, id, path = []) {
    path.push({ id: tree.id, name: tree.name });

    if (tree.id === id) return path;

    if (tree.subCategories) {
        for (let i = 0; i < tree.subCategories.length; i++) {
            const child = tree.subCategories[i];
            const result = findIdWithPath(child, id, path);

            if (result) return result;
        }
    }

    path.pop();

    return null;
}