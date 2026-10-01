import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const source = "public/vidspry-logo.svg";

const icoPng = await sharp(source).resize(64, 64).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(64, 6);
icoHeader.writeUInt8(64, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(icoPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
const ico = Buffer.concat([icoHeader, icoPng]);

await Promise.all([
  sharp(source).resize(512, 512).png().toFile("public/vidspry-icon.png"),
  sharp(source).resize(512, 512).png().toFile("public/favicon.png"),
  sharp(source).resize(180, 180).png().toFile("app/apple-icon.png"),
  sharp(source).resize(32, 32).png().toFile("public/favicon-32x32.png"),
  writeFile("public/vidspry-icon.ico", ico),
  writeFile("public/favicon.ico", ico),
  writeFile("app/favicon.ico", ico),
  sharp("public/vidspry-og.svg").png().toFile("public/vidspry-og.png"),
]);
