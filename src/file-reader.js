import getpath from "./get-path.js";
import fs from 'fs';

const filePath = getpath("data/hotel-region.csv");
const fileData = fs.readFileSync(filePath, "utf-8");
console.log(fileData.toLowerCase().trim());