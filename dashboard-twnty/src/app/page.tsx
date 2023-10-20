'use client'

import { PageContainer } from '@/components/PageContainer'
import { Wrapper } from './styles'
import { Typography } from '@/components/Typography'
import { useTheme } from 'styled-components'
import { Button } from '@/components/Button'

export default function HomePage() {
	const theme = useTheme()
	return (
		<PageContainer>
			<Wrapper>
				<Typography tag="h1" text="Data USA" color={theme.title} />
				<Button text="Tap on it!" link="/summary" />
			</Wrapper>
		</PageContainer>
	)
}
