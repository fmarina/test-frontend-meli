import { Button } from 'features/common/components/Button'
import { Layout } from 'features/common/components/Layout'
import { NEW_CONDITION } from 'features/common/utils/constants'

import './ProductDetail.scss'

import type { ProductDetailProps } from './types'

const ProductDetail = ({ categories = [], productDetail }: ProductDetailProps) => {
  const {
    title,
    condition,
    price,
    picture,
    description,
    sold_quantity: soldQuantity,
  } = productDetail

  const itemCondition = condition === NEW_CONDITION ? 'Nuevo' : 'Usado'

  return (
    <Layout breadcrumb={categories}>
      <section className='productdetail'>
        <section className='productdetail__info'>
          <section className='productdetail__info__picture'>
            <img src={picture} alt={title} />
          </section>
          <section className='productdetail__info__product'>
            <p className='productdetail__info__product__condition'>
              {itemCondition} - {soldQuantity} vendidos
            </p>
            <h1 className='productdetail__info__product__title'>{title}</h1>
            <p className='productdetail__info__product__price'>{price.decimals}</p>
            <Button buttonText='Comprar' handleOnClick={() => undefined} />
          </section>
        </section>
        <section className='productdetail__description'>
          <p className='productdetail__description__title'>Descripción del producto</p>
          <p className='productdetail__description__text'>{description}</p>
        </section>
      </section>
    </Layout>
  )
}

export { ProductDetail }
