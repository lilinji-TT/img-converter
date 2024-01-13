#!/usr/bin/env node
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFile = process.argv[2];
const outputFormat = process.argv[3];

if (!inputFile || !outputFormat) {
  console.error("Usage: node convert.js <input-file> <output-format>");
  process.exit(1);
}

const outputFile = path.parse(inputFile).name + "." + outputFormat;

sharp(inputFile)
  .toFormat(outputFormat)
  .toBuffer()
  .then((data) => {
    fs.writeFileSync(outputFile, data);
    console.log(`Converted image saved as ${outputFile}`);
  })
  .catch((err) => {
    console.error("Error converting image:", err);
  });
