import { ChangeEvent } from 'react'
import { Typography } from '../Typography'
import { Input, InputWrapper } from './styles'

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	inputValue: string
	text: string
	isNumber?: boolean
}

export const SearchInput = ({ onChange, inputValue, text, isNumber }: Props) => (
	<InputWrapper>
		<Typography tag="label" text={text} strong />
		<Input type={isNumber ? 'number' : 'text'} value={inputValue} onChange={onChange} />
	</InputWrapper>
)
