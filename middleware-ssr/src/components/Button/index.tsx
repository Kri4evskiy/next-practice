import Link from 'next/link'
import styles from './styles.module.scss'

type Props = {
	text: string
	link?: string
	width?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, link, width, ...restProps }: Props) => {
	if (link) {
		return (
			<button type="button" className={styles.button} style={{ width: width }} {...restProps}>
				<Link href={link}>{text}</Link>
			</button>
		)
	}
	return (
		<button
			type="button"
			className={styles.button}
			style={{ width: width, ...(restProps.disabled && { opacity: '0.5' }) }}
			{...restProps}
		>
			{text}
		</button>
	)
}
