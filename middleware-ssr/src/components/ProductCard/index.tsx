import { ProductType } from '@/schemas/product'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Typography } from '../Typography'
import { adjustToCents } from '@/utils/adjust-to-cents'

type Props = {
	product: ProductType
}

export const ProductCard = ({ product }: Props) => {
	return (
		<div className={styles.card}>
			<Image src={product.image_url} alt={product.description} width={208} height={208} priority />
			<div className={styles.card__characteristics}>
				<Typography text={product.manufacturer} size="14px" color={styles.gray} />
				<div className={styles.card__price}>
					<Typography text={product.scu} size="18px" strong />
					<Typography
						text={adjustToCents(product.retail_price)}
						size="18px"
						strong
						color={styles.primaryColor}
					/>
				</div>
			</div>
		</div>
	)
}
