import { Typography } from '../Typography'
import { StyledListItemWrapper } from './styles'

type Props = {
	data: { [key: string]: string | number }
}

export const ListItem = ({ data }: Props) => {
	return (
		<StyledListItemWrapper>
			{Object.entries(data).map(el => (
				<div key={el[0]}>
					<Typography tag="span" strong text={`${el[0]}: `} />
					<Typography tag="span" text={` ${el[1]}`} />
				</div>
			))}
		</StyledListItemWrapper>
	)
}
