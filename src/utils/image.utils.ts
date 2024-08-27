import path from 'path';
import { Buffer } from 'buffer';

const HOST = process.env.HOST

function extractMimeType(base64Image: string): string {
    const matches = base64Image.match(/^data:(.+);base64,/);
    return matches ? matches[1] : 'unknown';
}

function getImageUrl(imagePath: string): string {
    return `${HOST}/uploads/${path.basename(imagePath)}`;
}

function extractSize(base64Image: string): number {
    const base64Data = base64Image.split(',')[1];
    return Buffer.byteLength(base64Data, 'base64');
}

export { extractMimeType, getImageUrl, extractSize }
