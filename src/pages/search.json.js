import { getCollection } from "astro:content";

export async function GET() {
	const posts = await getCollection("blog");
	const searchData = posts
		.filter((post) => !post.data.draft)
		.map((post) => ({
			id: post.id,
			title: post.data.title,
			description: post.data.description,
			tags: post.data.tags || [],
			content: post.body,
			slug: post.id,
		}));

	return new Response(JSON.stringify(searchData), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
