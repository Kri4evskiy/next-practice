import styled from 'styled-components'

export const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	color: black;
	font-family: monospace;
	font-size: 25px;
	text-align: left;
`

export const StyledTh = styled.th`
	background-color: ${({ theme }) => theme.underline};
	color: white;
	padding: 10px;

	@media (max-width: 600px) {
		padding: 6px;
		font-size: 18px;
	}
`

export const StyledTd = styled.td`
	background-color: #f2f2f2;
	padding: 10px;

	@media (max-width: 600px) {
		padding: 6px;
		font-size: 18px;
	}
`

export const StyledTr = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`
