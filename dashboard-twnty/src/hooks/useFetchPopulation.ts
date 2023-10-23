import { fetchPopulation } from '@/lib/fetchPopulation'
import { FormattedDataType } from '@/types/USAPopulationType'
import { useState, useEffect } from 'react'

export const useFetchPopulation = (url: string) => {
	const [data, setData] = useState<FormattedDataType[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)

			const response = await fetchPopulation(url)

			setData(response)
			setLoading(false)
		}
		fetchData()
	}, [url])

	return { data, loading }
}
