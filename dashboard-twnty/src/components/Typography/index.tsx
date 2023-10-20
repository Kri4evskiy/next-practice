import React from 'react'

type Props = {
	tag: string
	text: string
	color?: string
	strong?: boolean
}

type TypographyAttributes = {
	style: React.CSSProperties
}

export const Typography = ({ tag, text, color = '#1c1c1c', strong = false }: Props) => {
	const node = `${tag ? tag : 'p'}`

	const attributes: TypographyAttributes = {
		style: { color, fontWeight: strong ? 'bold' : 'normal' }
	}

	return React.createElement(node, attributes, text)
}
