import { readFileSync } from "fs"

export const getCodeExample = (type: string, fileName: string) => {
	return readFileSync(`app/code-examples/${type}/${fileName}`).toString()
}
