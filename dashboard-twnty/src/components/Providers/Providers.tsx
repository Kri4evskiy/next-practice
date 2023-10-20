'use client'

import StylesProvider from './StylesProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <StylesProvider>{children}</StylesProvider>
}

export default Providers
