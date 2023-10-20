import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	padding: 24px 12px;

	transition: background-color 0.3s linear;
	background-color: ${({ theme }) => theme.bg};

	@media (max-width: 1024px) {
		padding: 24px 8px;
	}
`

export const ButtonGroupWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 32px;

	@media (max-width: 800px) {
		row-gap: 12px;
		width: 306px;
	}
`
