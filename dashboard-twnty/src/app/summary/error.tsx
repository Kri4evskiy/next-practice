'use client'

import { useEffect } from 'react'
import { StyledWrapper } from './styles'
import Link from 'next/link'
import { Routes } from '@/config'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<StyledWrapper>
			<h2>Something went wrong!</h2>
			<Link href={Routes.HOME}>Home page</Link>
		</StyledWrapper>
	)
}
