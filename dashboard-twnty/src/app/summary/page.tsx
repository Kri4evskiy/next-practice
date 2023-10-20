'use client'

import { Blog } from '@/components/Blog'
import { Button } from '@/components/Button'
import { List } from '@/components/List'
import { PageContainer } from '@/components/PageContainer'
import { Table } from '@/components/Table'
import { PopulationFormat } from '@/enums'
import { FormattedDataType, USAPopulationResponseType } from '@/types/USAPopulationType'
import { useEffect, useState } from 'react'
import { ButtonGroupWrapper, Wrapper } from './styles'

export default function SummaryPage() {
	const [population, setPopulation] = useState<FormattedDataType[]>([])
	const [format, setFormat] = useState<PopulationFormat>(PopulationFormat.LIST)

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const response = await fetch(
				'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
			)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const { data } = (await response.json()) as USAPopulationResponseType
			console.log(data)

			const formattedData = data.map(el => ({
				Nation: el.Nation,
				Population: el.Population,
				Year: el.Year
			}))

			setPopulation(formattedData as FormattedDataType[])
		}

		fetchData()
	}, [])
	return (
		<PageContainer>
			<Wrapper>
				<ButtonGroupWrapper>
					<Button text="BLOG" onClick={() => setFormat(PopulationFormat.BLOG)} />
					<Button text="TABLE" onClick={() => setFormat(PopulationFormat.TABLE)} />
					<Button text="LIST" onClick={() => setFormat(PopulationFormat.LIST)} />
				</ButtonGroupWrapper>

				<div>
					{format === PopulationFormat.BLOG && <Blog data={population} />}
					{format === PopulationFormat.TABLE && <Table data={population} />}
					{format === PopulationFormat.LIST && <List data={population} />}
				</div>
			</Wrapper>
		</PageContainer>
	)
}
