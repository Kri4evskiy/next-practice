'use client'

import { ChangeEvent, useState } from 'react'
import { useTheme } from 'styled-components'

import { MoonIcon, SunIcon } from '../Icons'
import { useThemeToggle } from '../Providers/StylesProvider'
import { Input, Label, Switch } from './styles'

export const ToggleSwitch = () => {
	const [checked, setChecked] = useState(false)
	const toggleTheme = useThemeToggle()
	const theme = useTheme()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked)
		toggleTheme()
	}

	return (
		<Label>
			<MoonIcon color={theme.themeIcon} />
			<Input checked={checked} type="checkbox" onChange={handleChange} />
			<Switch />
			<SunIcon color={theme.themeIcon} />
		</Label>
	)
}
