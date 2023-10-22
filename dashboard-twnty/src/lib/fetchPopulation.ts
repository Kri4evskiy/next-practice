import { FormattedDataType, USAPopulationResponseType } from '@/types/USAPopulationType'

export async function fetchPopulation(url: string) {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	const { data } = (await response.json()) as USAPopulationResponseType

	return data.map(el => ({
		Nation: el.Nation,
		Population: el.Population,
		Year: el.Year
	})) as FormattedDataType[]
}
