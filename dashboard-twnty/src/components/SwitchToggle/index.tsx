'use client'

import { ChangeEvent, useState } from 'react'
import { useTheme } from 'styled-components'

import { MoonIcon, SunIcon } from '../Icons'
import { useThemeToggle } from '../Providers/StylesProvider'
import { StyledInput, StyledLabel, StyledSwitch } from './styles'

export const ToggleSwitch = () => {
	const [checked, setChecked] = useState(false)
	const toggleTheme = useThemeToggle()
	const theme = useTheme()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked)
		toggleTheme()
	}

	return (
		<StyledLabel>
			<MoonIcon color={theme.themeIcon} />
			<StyledInput checked={checked} type="checkbox" onChange={handleChange} />
			<StyledSwitch />
			<SunIcon color={theme.themeIcon} />
		</StyledLabel>
	)
}
