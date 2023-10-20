export type USAPopulationResponseType = {
	data: ResponseDataType[]
	source: unknown
}

export type ResponseDataType = {
	Nation: string
	Year: string
	Population: number
	'ID Nation': string
	'ID Year': number
	'Slug Nation': string
}

export type FormattedDataType = {
	Nation: string
	Year: string
	Population: number
}
