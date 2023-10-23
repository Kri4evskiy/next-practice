'use client'

import { Blog } from '@/components/Blog'
import { Button } from '@/components/Button'
import { List } from '@/components/List'
import { PageContainer } from '@/components/PageContainer'
import { SearchInput } from '@/components/SearchInput'
import { Table } from '@/components/Table'
import { Typography } from '@/components/Typography'
import { PopulationFormat } from '@/enums'
import { FormattedDataType } from '@/types/USAPopulationType'
import Fuse from 'fuse.js'
import React, { ChangeEvent, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import { useFetchPopulation } from '../../hooks'
import { sortByPopulation, sortByYear, sortReducer, sortingFn } from './helpers'
import { StyledButtonGroupWrapper, StyledDataButtonGroupWrapper, StyledWrapper } from './styles'

export default function SummaryPage() {
	const [querySearch, setQuerySearch] = useState('')
	const [format, setFormat] = useState<PopulationFormat>(PopulationFormat.LIST)
	const [sortState, dispatch] = useReducer(sortReducer, {
		yearOrder: 'init',
		populationOrder: 'init'
	})

	const { data: populationData, loading } = useFetchPopulation(
		process.env.NEXT_PUBLIC_API_URL || ''
	)
	const [population, setPopulation] = useState(populationData)
	useEffect(() => {
		setPopulation(populationData)
	}, [populationData])

	const fuse = new Fuse(population, {
		keys: ['Year', 'Population']
	})

	const fuseResult = useMemo(() => {
		return querySearch
			? fuse.search(querySearch).map(fuseElement => fuseElement.item)
			: populationData
	}, [querySearch, populationData])

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setQuerySearch(e.target.value)
	}

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
					<SearchInput
						isNumber
						text="Numeric input that filter data by Year or Population (not hard options)"
						inputValue={querySearch}
						onChange={onChangeHandler}
					/>

					<StyledDataButtonGroupWrapper>
						<Button text={`Year: ${sortState.yearOrder}`} onClick={handleSortByYear} />
						<Button
							text={`Population: ${sortState.populationOrder}`}
							onClick={handleSortByPopulation}
						/>
					</StyledDataButtonGroupWrapper>

					<RenderPopulation loading={loading} format={format} population={fuseResult} />
				</div>
			</StyledWrapper>
		</PageContainer>
	)
}

const RenderPopulation = ({
	loading,
	format,
	population
}: {
	loading: boolean
	format: PopulationFormat
	population: FormattedDataType[]
}) => {
	if (loading) return <Typography tag="p" strong text="Loading..." />

	switch (format) {
		case PopulationFormat.BLOG:
			return <Blog data={population} />
		case PopulationFormat.TABLE:
			return <Table data={population} />
		case PopulationFormat.LIST:
			return <List data={population} />
		default:
			return null
	}
}
