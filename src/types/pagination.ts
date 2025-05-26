export type Pagination<T> = {
	total_pages: number
	current_page: number
	data: T[]
}
