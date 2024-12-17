"use client"

import { usePathname } from "next/navigation"
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react"
import Cookies from "js-cookie"

interface AuthContextType {
	user: string | undefined
	logout: () => void
}

type AuthProviderProps = {
	children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const currentRoute = usePathname()
	const [user, setUser] = useState<string>()

	useEffect(() => {
		setUser(Cookies.get("username") || undefined)
	}, [currentRoute])

	const logout = () => {
		setUser(undefined)
	}

	return (
		<AuthContext.Provider value={{ user, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider")
	}
	return context
}
