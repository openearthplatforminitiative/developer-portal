export type Code = {
	id: string
	language: "java" | "javascript" | "python" | "go" | "bash"
	source: string
	created_at?: string
	updated_at?: string
	created_by?: string
	updated_by?: string
}

export type CodeExample = {
	id: string
	title: string
	description?: string
	code: Code[]
	created_at?: string
	updated_at?: string
	created_by?: string
	updated_by?: string
}
