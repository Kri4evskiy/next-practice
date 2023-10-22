import { FormattedDataType } from '@/types/USAPopulationType'

export const sortByYear = (a: FormattedDataType, b: FormattedDataType) => {
	return a.Year.localeCompare(b.Year)
}

export const sortByPopulation = (a: FormattedDataType, b: FormattedDataType) => {
	return Number(a.Population) - Number(b.Population)
}

type SortState = {
	yearOrder: 'init' | 'asc' | 'desc'
	populationOrder: 'init' | 'asc' | 'desc'
}

type SortAction = {
	type: 'year' | 'population'
}

export const sortReducer = (state: SortState, action: SortAction): SortState => {
	switch (action.type) {
		case 'year':
			if (state.yearOrder === 'asc') return { ...state, yearOrder: 'desc', populationOrder: 'init' }
			if (state.yearOrder === 'desc')
				return { ...state, yearOrder: 'init', populationOrder: 'init' }
			return { ...state, yearOrder: 'asc', populationOrder: 'init' }
		case 'population':
			if (state.populationOrder === 'asc')
				return { ...state, populationOrder: 'desc', yearOrder: 'init' }
			if (state.populationOrder === 'desc')
				return { ...state, populationOrder: 'init', yearOrder: 'init' }
			return { ...state, populationOrder: 'asc', yearOrder: 'init' }
		default:
			throw new Error()
	}
}

export const sortingFn = (
	arr: FormattedDataType[],
	order: string,
	sortFn: (a: FormattedDataType, b: FormattedDataType) => number
): FormattedDataType[] => {
	let sortedData
	if (order === 'init') return (sortedData = [...arr])
	else if (order === 'asc') return (sortedData = [...arr].sort(sortFn))
	else return (sortedData = [...arr].sort(sortFn).reverse())
}
