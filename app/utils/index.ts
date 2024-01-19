import { readFileSync } from 'fs';

export const getFileContent = (fileName: string) => {
  return readFileSync(`app/code-examples/${fileName}`).toString();
};
