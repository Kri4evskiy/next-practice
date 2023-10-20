import React from 'react'
import { StyledItemWrapper } from './styles'

type Props = {
	title: string
	subtitle: string
}

export const BlogItem = ({ subtitle, title }: Props) => {
	return (
		<StyledItemWrapper>
			<h2>{title}</h2>
			<p>{subtitle}</p>
		</StyledItemWrapper>
	)
}
