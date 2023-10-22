import GlobalStyles from '@/styles/GlobalStyles'
import React from 'react'
import { Header } from '../Header'

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
