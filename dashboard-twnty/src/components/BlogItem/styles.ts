import styled from 'styled-components'

export const StyledItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	padding: 8px;

	border: 1px solid ${({ theme }) => theme.underline};
	border-radius: 12px;
	background-color: #fff;

	@media (max-width: 1024px) {
		padding: 24px 8px;
	}
`
