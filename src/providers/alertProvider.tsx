"use client"

import { Alert, AlertTitle, Snackbar } from "@mui/material"
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"

type AlertProps = {
	severity: "error" | "warning" | "info" | "success"
	title: string
	message: string
}

type AlertContextType = {
	setAlert: (alert: AlertProps) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
	const [alerts, setAlerts] = useState<AlertProps[]>([])

	const addAlert = useCallback((alert: AlertProps) => {
		setAlerts((prevAlerts) => [...prevAlerts, alert]);
	}, []);

	const clearAlert = (index: number) => {
		// remove alert from array
		setAlerts(alerts.filter((_, i) => i !== index))
	}

	return (
		<AlertContext.Provider value={{ setAlert: addAlert }}>
			{children}
			{alerts.map((alert, index) => (
				<Snackbar
					key={index}
					open={alert !== undefined}
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					autoHideDuration={6000}
					onClose={() => clearAlert(index)}
				>
					<Alert severity={alert.severity} onClose={() => clearAlert(index)}>
						<AlertTitle>{alert.title}</AlertTitle>
						{alert.message}
					</Alert>
				</Snackbar>
			))}
		</AlertContext.Provider>
	)
}

export const useAlert = (): AlertContextType => {
	const context = useContext(AlertContext)
	if (context === undefined) {
		throw new Error("useAlert must be used within an AlertProvider")
	}
	return context
}
