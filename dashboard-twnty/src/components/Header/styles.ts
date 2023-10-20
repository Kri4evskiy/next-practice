import styled from 'styled-components'

export const StyledHeaderWrapper = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 0 12px;
	height: 58px;
	width: 100vw;
	border-bottom: 1px solid ${({ theme }) => theme.underline};
	transition: background-color 0.3s linear;
	background-color: ${({ theme }) => theme.bg};

	@media (min-width: 481px) {
		justify-content: center;
	}
`

export const StyledToggleWrapper = styled.header`
	position: absolute;
	right: 12px;
`
