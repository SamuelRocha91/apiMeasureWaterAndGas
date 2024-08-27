import path from 'path';

const HOST = process.env.HOST

function extractMimeType(base64Image: string): string {
    const matches = base64Image.match(/^data:(.+);base64,/);
    return matches ? matches[1] : 'unknown';
}

function getImageUrl(imagePath: string): string {
    return `${HOST}/uploads/${path.basename(imagePath)}`;
}
export { extractMimeType, getImageUrl }