'use client'

import { Blog } from '@/components/Blog'
import { Button } from '@/components/Button'
import { List } from '@/components/List'
import { PageContainer } from '@/components/PageContainer'
import { Table } from '@/components/Table'
import { PopulationFormat } from '@/enums'
import { fetchPopulation } from '@/lib/fetchPopulation'
import { FormattedDataType } from '@/types/USAPopulationType'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { StyledButtonGroupWrapper, StyledDataButtonGroupWrapper, StyledWrapper } from './styles'
import { sortByPopulation, sortByYear, sortReducer, sortingFn } from './helpers'

export default function SummaryPage() {
	const [population, setPopulation] = useState<FormattedDataType[]>([])
	const [format, setFormat] = useState<PopulationFormat>(PopulationFormat.LIST)
	const [sortState, dispatch] = useReducer(sortReducer, {
		yearOrder: 'init',
		populationOrder: 'init'
	})

	useEffect(() => {
		fetchPopulation(process.env.API_URL || '').then(data => setPopulation(data))
	}, [])

	const handleSetFormat = useCallback((format: PopulationFormat) => setFormat(format), [])

	const handleSortByYear = useCallback(() => {
		dispatch({ type: 'year' })
		setPopulation(sortingFn(population, sortState.yearOrder, sortByYear))
	}, [population, sortState.yearOrder])

	const handleSortByPopulation = useCallback(() => {
		dispatch({ type: 'population' })
		setPopulation(sortingFn(population, sortState.populationOrder, sortByPopulation))
	}, [population, sortState.populationOrder])

	return (
		<PageContainer>
			<StyledWrapper>
				<StyledButtonGroupWrapper>
					<Button text="BLOG" onClick={() => handleSetFormat(PopulationFormat.BLOG)} />
					<Button text="TABLE" onClick={() => handleSetFormat(PopulationFormat.TABLE)} />
					<Button text="LIST" onClick={() => handleSetFormat(PopulationFormat.LIST)} />
				</StyledButtonGroupWrapper>

				<div>
					<StyledDataButtonGroupWrapper>
						<Button text={`Year: ${sortState.yearOrder}`} onClick={handleSortByYear} />
						<Button
							text={`Population: ${sortState.populationOrder}`}
							onClick={handleSortByPopulation}
						/>
					</StyledDataButtonGroupWrapper>

					{format === PopulationFormat.BLOG && <Blog data={population} />}
					{format === PopulationFormat.TABLE && <Table data={population} />}
					{format === PopulationFormat.LIST && <List data={population} />}
				</div>
			</StyledWrapper>
		</PageContainer>
	)
}
