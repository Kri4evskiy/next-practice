'use client'

import { Button } from '@/components/Button'
import styles from './styles.module.scss'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className={styles.error__container}>
			<h2>Something went wrong!</h2>
			<h2>{error.message}</h2>
			<Button text="Try again" onClick={() => reset()} />
		</div>
	)
}
