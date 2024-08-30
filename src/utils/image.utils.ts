import path from "path";
import { Buffer } from "buffer";
import fs from "fs";

const HOST = process.env.HOST;

function extractMimeType(base64Image: string): string {
  const matches = base64Image.match(/^data:(.+);base64,/);
  return matches ? matches[1] : "unknown";
}

function getImageUrl(imagePath: string): string {
  return `${HOST}/uploads/${path.basename(imagePath)}`;
}

function extractSize(base64Image: string): number {
  const base64Data = base64Image.split(",")[1];
  return Buffer.byteLength(base64Data, "base64");
}

async function saveBase64Image(
  base64Image: string,
  customer_code: string,
  type: string
): Promise<string> {
  const base64Data = base64Image.split(",")[1];
  const imageMimeType = extractMimeType(base64Image);
  const extension = imageMimeType.split("/")[1];

  const filename = `${customer_code}_${type}_${Date.now()}.${extension}`;
  const filePath = path.join(__dirname, "../uploads", filename);

  if (!fs.existsSync(path.join(__dirname, "../uploads"))) {
    fs.mkdirSync(path.join(__dirname, "../uploads"));
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, Buffer.from(base64Data, "base64"), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filePath); 
      }
    });
  });
}

export { extractMimeType, getImageUrl, extractSize, saveBase64Image };
