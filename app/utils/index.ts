import { readFileSync } from 'fs';

export const getCodeExample = (fileName: string) => {
  return readFileSync(`app/code-examples/${fileName}`).toString();
};
