import { StyledTable, StyledTd, StyledTh, StyledTr } from './styles'

type Props = {
	data: { [key: string]: string | number }[]
}

export const Table = ({ data }: Props) => {
	return (
		<StyledTable>
			<thead>
				<tr>
					{Object.keys(data[0]).map((key: string, index: number) => (
						<StyledTh key={index}>{key}</StyledTh>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row: { [key: string]: string | number }, index: number) => (
					<StyledTr key={index}>
						{Object.entries(row).map(([key, value]: [string, string | number], i: number) => (
							<StyledTd key={i}>{value}</StyledTd>
						))}
					</StyledTr>
				))}
			</tbody>
		</StyledTable>
		// <table>
		// 	<thead>
		// 		<tr>
		// 			{Object.keys(data[0]).map((key: string, index: number) => (
		// 				<th key={index}>{key}</th>
		// 			))}
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		{data.map((row: { [key: string]: string | number }, index: number) => (
		// 			<tr key={index}>
		// 				{Object.entries(row).map(([key, value]: [string, string | number], i: number) => (
		// 					<td key={i}>{value}</td>
		// 				))}
		// 			</tr>
		// 		))}
		// 	</tbody>
		// </table>
	)
}
