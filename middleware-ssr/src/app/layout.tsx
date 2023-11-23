import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
	weight: ['400', '500'],
	subsets: ['latin'],
	variable: '--font-roboto',
	display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={roboto.variable}>
			<body>
				<Header />
				<main>
					<div className="main__container">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	)
}
