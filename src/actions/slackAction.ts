"use server"

type Feedback = {
	url: string
	thumb: "up" | "down"
	message: string
}

export async function postFeedback({ url, thumb, message }: Feedback) {
	const thumbEmoji = thumb === "up" ? "👍" : "👎"
	if (message.length > 500) {
		return {
			errors: [
				{
					message: "Message is too long. Please limit it to 500 characters.",
				},
			],
		}
	}
	return fetch(
		`https://hooks.slack.com/services/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`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				text: `Feedback from ${url}\nThumb: ${thumbEmoji}\nMessage: ${message}`,
			}),
		}
	)
		.then((res) => {
			if (!res.ok) {
				console.error("Failed to send feedback", res.statusText)
				throw new Error("Failed to send feedback")
			}
		})
		.catch((err) => {
			console.error("Error sending feedback:", err)
			throw new Error(`Sorry, something went wrong. Please try again later.`)
		})
}
