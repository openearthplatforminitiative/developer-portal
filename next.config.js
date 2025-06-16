/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		unoptimized: true,
		domains: ["cdn.sanity.io"],
	},
	expireTime: 900,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	async redirects() {
		return []
	},
}

module.exports = nextConfig
