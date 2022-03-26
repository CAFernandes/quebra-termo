import { readFileSync } from 'fs';
import { resolve } from 'path';
import writeFile from './WriteWords';

function readFilteredFile():string[] {
  try {
    const data = readFileSync(resolve('quebra-texto', '..', 'base', 'br-filter-utf8.txt'), 'utf8')
    return data.split(/\n/)
  } catch (err) {
    return []
  }
}
function readFile():string[] {
  try {
    const data = readFileSync(resolve('quebra-texto', '..', 'base', 'br-utf8.txt'), 'utf8')
    return data.split(/\n/).filter(word => word.length == 5 && /\w{5}/i.test(word))
  } catch (err) {
    return []
  }
}

export default function readWords():string[] {
  let words = readFilteredFile();
  if (words.length == 0) {
    words = readFile()
    writeFile(words.join('\n'))
  }
  return words
}
