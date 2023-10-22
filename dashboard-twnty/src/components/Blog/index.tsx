import { FormattedDataType } from '@/types/USAPopulationType'
import { BlogItem } from '../BlogItem'
import { StyledBlogWrapper } from './styles'
import Link from 'next/link'

type Props = {
	data: FormattedDataType[]
}

export const Blog = ({ data }: Props) => {
	return (
		<StyledBlogWrapper>
			{data.map(el => (
				<Link href={`/summary/${el.Year}`} key={el.Year}>
					<BlogItem
						title={`Год: ${el.Year}`}
						subtitle={`В этом году население ${el.Nation} составляло ${el.Population} человек.`}
					/>
				</Link>
			))}
		</StyledBlogWrapper>
	)
}
