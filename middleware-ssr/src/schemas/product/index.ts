import { z } from 'zod'

export const productSchema = z.object({
	scu: z.string(),
	description: z.string(),
	cpt: z.number(),
	jhb: z.number(),
	dbn: z.number(),
	total_stock: z.number(),
	dealer_price: z.number(),
	retail_price: z.number(),
	manufacturer: z.string(),
	image_url: z.string()
})

export type ProductType = z.infer<typeof productSchema>
