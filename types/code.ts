export type Code = {
	id: string
	language: "Java" | "Javascript" | "Python" | "Go" | "Bash"
	source: string
}

export type CodeExample = {
	id: string
	title: string
	description?: string
	code: Code[]
}
