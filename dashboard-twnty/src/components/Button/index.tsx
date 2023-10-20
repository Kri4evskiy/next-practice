import Link from 'next/link'
import { StyledButton } from './styles'

type Props = {
	text: string
	onClick?: () => void
	link?: string
}

export const Button = ({ text, onClick, link }: Props) => {
	if (link) {
		return (
			<StyledButton type="button">
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
