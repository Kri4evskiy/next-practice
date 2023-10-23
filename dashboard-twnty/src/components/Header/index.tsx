import { useTheme } from 'styled-components'
import { Logo } from '../Icons'
import { ToggleSwitch } from '../SwitchToggle'
import { StyledHeaderWrapper, StyledToggleWrapper } from './styles'
import React from 'react'

export const Header = React.memo(() => {
	const theme = useTheme()
	return (
		<StyledHeaderWrapper>
			<Logo color={theme.themeIcon} />
			<StyledToggleWrapper>
				<ToggleSwitch />
			</StyledToggleWrapper>
		</StyledHeaderWrapper>
	)
})
