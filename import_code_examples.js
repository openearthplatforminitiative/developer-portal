import fs from "fs"
import { execSync } from "child_process"

const fileToLang = {
	js: "javascript",
	sh: "bash",
	py: "python",
	java: "java",
	go: "go",
}
const snakeToCamel = (str) =>
	str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase())
const snakeToPascal = (str) => {
	let camelCase = snakeToCamel(str)
	let pascalCase = camelCase[0].toUpperCase() + camelCase.substr(1)
	return pascalCase
}

const read = "code-examples"
const place = "app/code-examples"
const files = fs.readdirSync(read)
console.log(files)
for (const directory of files) {
	const dirName = directory
	// read directory files
	const files = fs.readdirSync(read + "/" + directory)
	const entries = files.map((file) => {
		return `
       {
          language: "${fileToLang[file.split(".").pop()]}",
          codeString: \`${fs
						.readFileSync(read + "/" + directory + "/" + file)
						.toString()
						.replace(/`/g, "\\`")
						.replace(/\$/g, "\\$")}\`
        }
      `
	})
	const codeExampleName = `${snakeToPascal(dirName)}Example`
	const codeExample = `
    import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"
    
    export const ${codeExampleName} = () => (
      <CodeBlockWrapper
        codeBlocks={[
          ${entries.toString()}
        ]}
      />
)
	`
	fs.writeFileSync(place + "/" + codeExampleName + ".tsx", codeExample)

	execSync(`npx prettier --write ${place + "/" + codeExampleName + ".tsx"}`)
}
