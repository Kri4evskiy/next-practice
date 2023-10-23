import { fetchPopulation } from '@/lib/fetchPopulation'

export default async function Page({ params }: { params: { id: string } }) {
	const element = await fetchPopulation(process.env.NEXT_PUBLIC_API_URL || '').then(res =>
		res.find(el => el.Year === params.id)
	)

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<p>Year: {element?.Year}</p>
			<p>Nation: {element?.Nation}</p>
			<p>Population: {element?.Population}</p>
		</div>
	)
}
