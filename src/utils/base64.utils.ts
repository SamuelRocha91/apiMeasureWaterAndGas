function extractMimeType(base64Image: string): string {
    const matches = base64Image.match(/^data:(.+);base64,/);
    return matches ? matches[1] : 'unknown';
}

export { extractMimeType }