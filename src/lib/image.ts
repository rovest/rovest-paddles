import { generateUUID } from "./string";

export async function heic2jpg(file: File) {
  const heic2any = require("heic2any");
  const id = generateUUID();
  const object: { id: string; file: File } = { id, file };
  const result = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.8,
  });
  const blob = Array.isArray(result) ? result[0] : result;
  const url = URL.createObjectURL(blob);
  return {
    id,
    name: file.name,
    url,
    blob,
  };
}
