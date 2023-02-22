import FreeShippingImg from 'assets/ic_shipping.png'

import './ProductItem.scss'

import type { ProductItemProps } from './type'

const ProductItem = ({ picture, title, price, freeShipping, address }: ProductItemProps) => (
  <section className='productitem'>
    <img className='productitem__picture' src={picture} alt='' />
    <section className='productitem__info'>
      <div className='productitem__info__detail'>
        <p className='productitem__info__detail__price'>
          {price.decimals}
          {freeShipping && <img src={FreeShippingImg} alt='free shipping' />}
        </p>
        <p className='productitem__info__detail__location'>{address}</p>
      </div>
      <p className='productitem__info__title'>{title}</p>
    </section>
  </section>
)

export { ProductItem }
