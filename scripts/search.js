const Search = {
    filterRecords(records, query) {
        if (!query) return records;
        const q = query.toLowercase();
        return records.filter(r =>
            r.description.toLowercase().includes(q) ||
            r.category.toLowercase().includes(q) ||
            r.date.includes(q)
        );
    },
    highlightText(text, query) {
        if (!query) return text;
        return text.replace(new RegExp('(${query})', 'gi'), '<mark>$1</mark>');
    }
};