'use server'

import { ProductCard } from '@/components/ProductCard'
import { Typography } from '@/components/Typography'
import { Routing } from '@/config'
import { getAllProducts } from '@/services/products'
import Link from 'next/link'

import styles from './styles.module.scss'

export default async function ProductPage() {
	const products = await getAllProducts()

	return (
		<div className={styles.page__container}>
			<Typography text="Наша продукция" tag="h1" size="42px" color={styles.primaryColor} />

			<div className={styles.products__grid}>
				{products.map(product => (
					<Link key={product.scu} href={`${Routing.PRODUCTS}/${product.scu}`}>
						<ProductCard product={product} />
					</Link>
				))}
			</div>
		</div>
	)
}
