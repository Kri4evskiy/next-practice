import { FormattedDataType } from '@/types/USAPopulationType'
import Link from 'next/link'
import { ListItem } from '../ListItem'
import { StyledListWrapper } from './styles'
import { Routes } from '@/config'

type Props = {
	data: FormattedDataType[]
}

export const List = ({ data }: Props) => {
	return (
		<StyledListWrapper>
			{data.map(el => (
				<Link href={`${Routes.SUMMARY}/${el.Year}`} key={el.Year}>
					<ListItem data={el} />
				</Link>
			))}
		</StyledListWrapper>
	)
}
