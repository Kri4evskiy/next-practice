import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	gap: 32px;

	transition: background-color 0.3s linear;
	background-color: ${({ theme }) => theme.bg};
`
