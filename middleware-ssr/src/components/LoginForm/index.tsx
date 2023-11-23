'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Routing } from '@/config'
import { loginSchema, type FormData } from '../../schemas/login'
import { Button } from '../Button'
import styles from './styles.module.scss'

export default function LoginForm() {
	const router = useRouter()

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty, isValid }
	} = useForm<FormData>({
		mode: 'onBlur',
		resolver: zodResolver(loginSchema)
	})

	async function onSubmit(data: FormData) {
		await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data })
		})

		router.push(Routing.PRODUCTS)
	}

	return (
		<form className={styles.form} action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.input__wrapper}>
				<label htmlFor="email">Логин</label>
				<input
					{...register('email', { required: true })}
					id="email"
					name="email"
					type="text"
					placeholder="Введите Email"
				/>
				{errors?.email && <ErrorMessage message={errors?.email.message} />}
			</div>

			<div className={styles.input__wrapper}>
				<label htmlFor="password">Пароль</label>
				<input
					{...register('password', { required: true })}
					id="password"
					type="password"
					name="password"
					placeholder="Введите пароль"
					autoComplete="off"
				/>
				{errors?.password && <ErrorMessage message={errors?.password.message} />}
			</div>

			<Button
				type="submit"
				text="Войти"
				width="fit-content"
				disabled={!isDirty || !isValid || isSubmitting}
			/>
		</form>
	)
}

const ErrorMessage = ({ message }: { message: string | undefined }) => {
	return <p className={styles.error__message}>{message}</p>
}
