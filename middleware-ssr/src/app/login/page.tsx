import LoginForm from '@/components/LoginForm'
import React from 'react'
import styles from './styles.module.scss'

export default function LoginPage() {
	return (
		<div className={styles.form__container}>
			<LoginForm />
		</div>
	)
}
