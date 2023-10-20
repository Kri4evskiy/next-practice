import { ListItem } from '../ListItem'
import { ListWrapper } from './styles'

type Props = {
	data: { [key: string]: string | number }[]
}

export const List = ({ data }: Props) => {
	return (
		<ListWrapper>
			{data.map(el => (
				<ListItem key={el.value} data={el} />
			))}
		</ListWrapper>
	)
}
