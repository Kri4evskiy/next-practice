'use client'

import StyledComponentsRegistry from '@/styles/registry'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles/theme'
import { createContext, useContext, useState } from 'react'

type ThemeType = 'light' | 'dark'

const ThemeToggleContext = createContext<() => void>(() => {})

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
	const [appTheme, setAppTheme] = useState<ThemeType>('light')
	const isDarkTheme = appTheme === 'dark'

	const toggleTheme = () => {
		setAppTheme(isDarkTheme ? 'light' : 'dark')
	}

	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<ThemeToggleContext.Provider value={toggleTheme}>{children}</ThemeToggleContext.Provider>
			</ThemeProvider>
		</StyledComponentsRegistry>
	)
}

export default StylesProvider
export const useThemeToggle = () => useContext(ThemeToggleContext)
