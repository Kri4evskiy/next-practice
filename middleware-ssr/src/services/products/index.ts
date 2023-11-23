import { Environment } from '@/config'
import { type ProductType, productSchema } from '@/schemas/product'

export const getAllProducts = async () => {
	const response = await fetchAllProducts()
	const data = await parseResponse(response)

	return data
}

export const getProductById = async (id: string) => {
	const response = await fetchProduct(id)
	const data = await parseResponse(response)
	const productById = findProductById(data, id)
	const similarProducts = findSimilarProducts(data, productById)

	return { productById, similarProducts }
}

const fetchAllProducts = async () => {
	const response = await fetch(`${Environment.LocalhostUrl}/api/products`)
	if (!response.ok) throw new Error('Ошибка запроса...')

	return response
}

const fetchProduct = async (id: string) => {
	const response = await fetch(`${Environment.LocalhostUrl}/api/products/${id}`)
	if (!response.ok) throw new Error('Ошибка запроса...')

	return response
}

const parseResponse = async (response: Response) => {
	const data = await response.json()
	const parsed = productSchema.array().safeParse(data)
	if (!parsed.success) {
		console.error(parsed.error)
		throw new Error('Валидация продуктов прошла с ошибкой...')
	}

	return parsed.data
}

const findProductById = (data: ProductType[], id: string) => {
	const product = data.find(product => product.scu === id)
	if (!product) throw new Error('Нет такого товара. Выберите другой.')

	return product
}

const findSimilarProducts = (data: ProductType[], product: ProductType) => {
	return data.filter(item => item.manufacturer === product?.manufacturer).slice(0, 3)
}
