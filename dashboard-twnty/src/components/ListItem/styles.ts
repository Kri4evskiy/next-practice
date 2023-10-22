import styled from 'styled-components'

export const StyledListItemWrapper = styled.li`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px;
	background-color: #fff;
	cursor: pointer;

	border-radius: 8px;

	&::before {
		content: '֎';
	}

	@media (max-width: 481px) {
		flex-direction: column;
	}
`
