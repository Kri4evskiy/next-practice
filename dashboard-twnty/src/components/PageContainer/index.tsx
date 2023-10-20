import React from 'react'
import { Header } from '../Header'
import GlobalStyles from '@/styles/GlobalStyles'

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GlobalStyles />
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</>
	)
}
