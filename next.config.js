/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		unoptimized: true,
		domains: ["cdn.sanity.io"],
	},
	async redirects() {
		return []
	},
}

module.exports = nextConfig
