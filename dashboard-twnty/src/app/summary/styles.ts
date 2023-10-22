import styled from 'styled-components'

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	gap: 32px;
	padding: 24px 12px;

	transition: background-color 0.3s linear;
	background-color: ${({ theme }) => theme.bg};

	@media (max-width: 1024px) {
		padding: 24px 8px;
	}
`

export const StyledButtonGroupWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 32px;

	margin-bottom: 32px;

	@media (max-width: 800px) {
		justify-content: space-around;
		gap: 12px;
		width: 290px;
	}
`

export const StyledDataButtonGroupWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 32px;
	margin-bottom: 32px;
`
