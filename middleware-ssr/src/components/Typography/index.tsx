import React from 'react'

type Props = {
	text: string
	tag?: string
	color?: string
	size?: string
	strong?: boolean
	onClick?: () => void
}

type TypographyAttributes = {
	style: React.CSSProperties
	onClick?: () => void
}

export const Typography = ({
	tag,
	text,
	color = '#1c1c1c',
	size = '14px',
	strong = false,
	onClick
}: Props) => {
	const node = `${tag ? tag : 'p'}`

	const attributes: TypographyAttributes = {
		onClick: onClick,
		style: {
			color,
			fontWeight: strong ? 'bold' : 'normal',
			fontSize: size,
			...(onClick && { cursor: 'pointer' })
		}
	}

	return React.createElement(node, attributes, text)
}
