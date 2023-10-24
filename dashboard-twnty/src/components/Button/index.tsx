import Link from 'next/link'
import { StyledButton } from './styles'

type Props = {
	text: string
	link?: string
	width?: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, link, width, ...restProps }: Props) => {
	if (link) {
		return (
			<StyledButton type="button" width={width} {...restProps}>
				<Link href={link}>{text}</Link>
			</StyledButton>
		)
	}
	return (
		<StyledButton type="button" width={width} {...restProps}>
			{text}
		</StyledButton>
	)
}
