/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		domains: ["cdn.sanity.io"],
	},
}

module.exports = nextConfig
