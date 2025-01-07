// src/lib/utils/toc.ts
interface TOCItem {
    id: string;
    depth: number;
    title: string;
    children: TOCItem[];
}

function cleanTitle(title: string): string {
    return title
        // Remove markdown links: [text](url) -> text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Remove remaining brackets and their contents: [text] -> ''
        .replace(/\[[^\]]+\]/g, '')
        // Remove parentheses and their contents: (text) -> ''
        .replace(/\([^)]+\)/g, '')
        // Trim whitespace and remove multiple spaces
        .replace(/\s+/g, ' ')
        .trim();
}

export function extractTOC(content: string): TOCItem[] {
    // Find all headings (##, ###, etc) but not single #
    const headingRegex = /^(#{2,6})\s+(.+)$/gm;
    const headings: TOCItem[] = [];

    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const depth = match[1].length;  // Number of # symbols
        const rawTitle = match[2];
        const title = cleanTitle(rawTitle);

        headings.push({
            depth,
            title,
            id: title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
            children: []
        });
    }

    // Convert flat array to tree structure
    const toc: TOCItem[] = [];
    const stack: TOCItem[] = [];

    headings.forEach(heading => {
        while (stack.length && stack[stack.length - 1].depth >= heading.depth) {
            stack.pop();
        }

        if (!stack.length) {
            toc.push(heading);
        } else {
            stack[stack.length - 1].children.push(heading);
        }

        stack.push(heading);
    });

    return toc;
}