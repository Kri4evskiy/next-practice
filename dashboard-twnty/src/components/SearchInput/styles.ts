import styled from 'styled-components'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	margin: 24px 0;
	width: fit-content;
`

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-size: 16px;
	color: #333;
`

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid #ccc;
`
