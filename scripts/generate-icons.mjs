import sharp from "sharp";

const source = "public/snapload-favicon-v2.svg";

await Promise.all([
  sharp(source).resize(512, 512).png().toFile("public/snapload-favicon-v2.png"),
  sharp(source).resize(32, 32).png().toFile("public/favicon-32x32.png"),
  sharp(source).resize(64, 64).png().toFile(".next-favicon-source.png"),
]);
