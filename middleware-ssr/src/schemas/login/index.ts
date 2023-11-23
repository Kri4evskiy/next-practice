import z from 'zod'

export const loginSchema = z.object({
	email: z.string().email({ message: 'Введите корректный адрес' }),
	password: z.string().min(8, { message: 'Пароль должен содержать минимум 8 символов' })
})

export type FormData = z.infer<typeof loginSchema>
