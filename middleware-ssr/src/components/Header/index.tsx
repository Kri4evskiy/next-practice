'use client'

import { setCookie } from 'cookies-next'
import { usePathname, useRouter } from 'next/navigation'

import { Routing } from '@/config'
import { Breadcrumbs } from '@/config/Breadcrumbs'
import { Typography } from '../Typography'
import styles from './styles.module.scss'

export const Header = () => {
	const router = useRouter()
	const pathname = usePathname()
	const path = pathname.split('/')[1]

	const handleLogout = () => {
		setCookie('login', 'false')
		router.push(Routing.LOGIN)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.logo__wrapper}>
					<Typography text="Логотип" size="32px" strong color={styles.white} />
					<Typography text={Breadcrumbs[path]} size="18px" color={styles.white} />
				</div>

				{pathname !== Routing.LOGIN && (
					<Typography
						text="Выйти из аккаунта"
						size="18px"
						color={styles.white}
						onClick={handleLogout}
					/>
				)}
			</div>
		</header>
	)
}
