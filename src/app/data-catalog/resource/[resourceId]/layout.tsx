type ResourceLoaderProps = {
	tutorials: React.ReactNode
	children: React.ReactNode
}

export default function layout({ tutorials, children }: ResourceLoaderProps) {
	return (
		<>
			{tutorials}
			{children}
		</>
	)
}
