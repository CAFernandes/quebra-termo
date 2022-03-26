import { writeFileSync } from 'fs';
import { resolve } from 'path';

export default function writeFile(content: string): boolean {
  try {
    writeFileSync(resolve('quebra-texto', '..', 'base', 'br-filter-utf8.txt'), content, { flag: 'a+' })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
