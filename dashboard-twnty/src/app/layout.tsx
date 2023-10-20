import Providers from '@/components/Providers/Providers'
import { Metadata } from 'next'
import { StrictMode } from 'react'

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Test task for TWNTY',
	icons: {
		icon: '/favicon.ico'
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<StrictMode>
			<html lang="en">
				<Providers>{children}</Providers>
			</html>
		</StrictMode>
	)
}
