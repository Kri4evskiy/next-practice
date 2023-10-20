import styled from 'styled-components'

export const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	color: #588c7e;
	font-family: monospace;
	font-size: 25px;
	text-align: left;
`

export const StyledTh = styled.th`
	background-color: #588c7e;
	color: white;
	padding: 10px;
`

export const StyledTd = styled.td`
	background-color: #f2f2f2;
	padding: 10px;
`

export const StyledTr = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`
