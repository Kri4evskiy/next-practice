import Link from 'next/link'
import { StyledButton } from './styles'

type Props = {
	text: string
	onClick?: () => void
	link?: string
	width?: number
}

export const Button = ({ text, onClick, link, width }: Props) => {
	if (link) {
		return (
			<StyledButton type="button" width={width}>
				<Link href={link}>{text}</Link>
			</StyledButton>
		)
	}
	return (
		<StyledButton type="button" onClick={onClick}>
			{text}
		</StyledButton>
	)
}
