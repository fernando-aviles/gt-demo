import fs from "fs";
import path from "path";

export default async function loadTranslations(locale: string) {
  const filePath = path.join(process.cwd(), "public", "gt", `${locale}.json`);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return undefined;
  }
}
