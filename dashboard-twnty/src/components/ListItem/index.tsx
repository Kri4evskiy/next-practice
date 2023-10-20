import { Fragment } from 'react'
import { Typography } from '../Typography'
import { ListItemWrapper } from './styles'

type Props = {
	data: { [key: string]: string | number }
}

export const ListItem = ({ data }: Props) => {
	return (
		<ListItemWrapper>
			{Object.entries(data).map(el => (
				<div key={el[0]}>
					<Typography tag="span" strong text={`${el[0]}: `} />
					<Typography tag="span" text={` ${el[1]}`} />
				</div>
			))}
		</ListItemWrapper>
	)
}
