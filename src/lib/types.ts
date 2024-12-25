
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	tags: string[]
	published: boolean
}

export type Tags = { [key: string]: Post[] };