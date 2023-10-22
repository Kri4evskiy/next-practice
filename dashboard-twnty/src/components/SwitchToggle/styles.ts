import styled from 'styled-components'

export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	color: black;
	cursor: pointer;
`

export const StyledSwitch = styled.div`
	position: relative;
	width: 68px;
	height: 32px;
	background: #b3b3b3;
	border-radius: 32px;
	padding: 4px;
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: 28px;
		height: 28px;
		border-radius: 35px;
		top: 50%;
		left: 4px;
		background: white;
		transform: translate(0, -50%);
	}
`

export const StyledInput = styled.input`
	opacity: 0;
	position: absolute;

	&:checked + ${StyledSwitch} {
		background: ${({ theme }) => theme.themeToggle};

		&:before {
			transform: translate(32px, -50%);
		}
	}
`
