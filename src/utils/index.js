export function copy(data) {
    const text = data.join('\n');
    navigator.clipboard.writeText(text);
}
