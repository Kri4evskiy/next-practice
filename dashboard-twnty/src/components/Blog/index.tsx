import React from 'react'
import { BlogItem } from '../BlogItem'
import { FormattedDataType } from '@/types/USAPopulationType'
import { StyledBlogWrapper } from './styles'

type Props = {
	data: FormattedDataType[]
}

export const Blog = ({ data }: Props) => {
	return (
		<StyledBlogWrapper>
			{data.map(el => (
				<BlogItem
					key={el.Year}
					title={`Год: ${el.Year}`}
					subtitle={`В этом году население ${el.Nation} составляло ${el.Population} человек.`}
				/>
			))}
		</StyledBlogWrapper>
	)
}
