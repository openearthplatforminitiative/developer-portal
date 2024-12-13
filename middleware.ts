import { NextResponse } from "next/server"

export function middleware(req: Request) {
	const headers = req.headers

	const email = headers.get("X-Auth-Request-Email")
	const username = headers.get("X-Auth-Request-Preferred-Username")

	const response = NextResponse.next()
	if (email || username) {
		const userInfo = username || email || ""
		response.cookies.set("username", userInfo, {
			sameSite: "strict",
			secure: true,
		})
	}

	return response
}

export const config = {
	matcher: ["/dashboard/:path*"],
}
