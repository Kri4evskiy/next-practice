'use server'

import { ProductCard } from '@/components/ProductCard'
import { Typography } from '@/components/Typography'
import { Routing } from '@/config'
import { getProductById } from '@/services/products'
import { adjustToCents } from '@/utils/adjust-to-cents'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

export default async function ProductPageById({ params }: { params: { id: string } }) {
	const { productById, similarProducts } = await getProductById(params.id)

	return (
		<div className={styles.page__container}>
			<Typography text="Товар" tag="h1" size="42px" color={styles.primaryColor} />

			<div className={styles.product__container}>
				<div className={styles.product__image}>
					<Image
						src={productById.image_url}
						alt={productById.description}
						fill
						sizes="(max-width: 1300px) 100vw"
						priority={true}
					/>
				</div>
				<div className={styles.product__details}>
					<div>
						<Typography text={productById.manufacturer} size="14px" color={styles.gray} />
						<Typography text={productById.scu} size="32px" strong />
					</div>
					<div>
						<Typography text={`Количество товара: ${productById.total_stock}`} size="14px" />

						<Typography
							text={`${adjustToCents(productById.retail_price)} грн`}
							size="24px"
							strong
							color={styles.primaryColor}
						/>
					</div>
					<Typography text={`${productById.description}`} size="18px" />
				</div>
			</div>

			<div className={styles.similar_products__container}>
				<Typography text="Похожие товары" tag="h2" size="32px" color={styles.primaryColor} />

				<div className={styles.similar_products}>
					{similarProducts.map(product => (
						<Link key={product.scu} href={`${Routing.PRODUCTS}/${product.scu}`}>
							<ProductCard product={product} />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
