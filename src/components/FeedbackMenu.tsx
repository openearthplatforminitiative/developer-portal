"use client"

import { postFeedback } from "@/actions/slackAction"
import {
	FeedbackOutlined,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from "@mui/icons-material"
import {
	Button,
	IconButton,
	Popover,
	Radio,
	RadioGroup,
	TextField,
	Typography,
	FormControlLabel,
	Tooltip,
} from "@mui/material"
import { useState } from "react"

export const FeedbackMenu = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement>()

	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(undefined)
	}

	return (
		<>
			<Tooltip title="Share your feedback">
				<IconButton
					aria-controls={open ? "feedback-popover" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
					className="bg-secondary-90 hover:bg-secondary-80 text-3xl rounded-full w-14 h-14 shadow-xl cursor-pointer"
				>
					<FeedbackOutlined />
				</IconButton>
			</Tooltip>
			<Popover
				id="feedback-popover"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				open={open}
				onClose={handleClose}
			>
				<div className="p-4 max-w-sm">
					<Content />
				</div>
			</Popover>
		</>
	)
}

const Content = () => {
	const [feedback, setFeedback] = useState<string>("")
	const [thumb, setThumb] = useState<"up" | "down">()
	const [submitted, setSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error>()

	const submitForm = () => {
		setLoading(true)
		setError(undefined)
		if (!thumb || !feedback) {
			setError(new Error("Please provide both thumbs and feedback."))
			setLoading(false)
			return
		}
		postFeedback({
			url: window.location.href,
			thumb,
			message: feedback,
		})
			.then(() => {
				setSubmitted(true)
			})
			.catch((err) => {
				setError(err)
			})
		setLoading(false)
	}

	if (submitted) {
		return (
			<Typography variant="body2">
				Thank you for your feedback! We appreciate your input.
			</Typography>
		)
	}
	return (
		<>
			<Typography variant="h6" className="mb-4">
				Share Your Feedback
			</Typography>
			<Typography className="mb-4">How was your experience?</Typography>
			<RadioGroup
				value={thumb ?? ""}
				onChange={(e) => setThumb(e.target.value as "up" | "down")}
				className="flex flex-row mb-4 text-3xl"
			>
				<FormControlLabel
					value="up"
					disabled={loading}
					control={<Radio hidden />}
					className="ml-0"
					label={
						thumb === "up" ? (
							<ThumbUp fontSize="large" className="text-primary-40" />
						) : (
							<ThumbUpOutlined fontSize="large" className="text-neutral-40" />
						)
					}
				/>
				<FormControlLabel
					value="down"
					control={<Radio hidden />}
					disabled={loading}
					className="ml-0"
					label={
						thumb === "down" ? (
							<ThumbDown fontSize="large" className="text-primary-40" />
						) : (
							<ThumbDownOutlined fontSize="large" className="text-neutral-40" />
						)
					}
				/>
			</RadioGroup>
			<Typography className="mb-4">Please share your thoughts:</Typography>
			<TextField
				label="Feedback"
				variant="outlined"
				className="bg-neutral-95"
				disabled={loading}
				value={feedback}
				onChange={(e) => setFeedback(e.target.value)}
				fullWidth
				multiline
				rows={4}
				placeholder="Share your feedback here..."
			/>
			{error && (
				<Typography variant="body2" color="error" className="mt-2">
					{error.message}
				</Typography>
			)}
			<Button
				variant="contained"
				loading={loading}
				className="rounded-full normal-case shadow-none text-xl px-4 py-2 mt-4"
				onClick={submitForm}
			>
				Submit Feedback
			</Button>
		</>
	)
}
