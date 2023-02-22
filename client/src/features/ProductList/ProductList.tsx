import { Link } from 'react-router-dom'

import { Layout } from 'features/common/components/Layout'
import { PRODUCT_LIST_PATH } from 'features/common/utils/constants'
import { ProductItem } from './components/ProductItem'

import './ProductList.scss'

import type { ProductListProps } from './types'

const ProductList = ({ products }: ProductListProps) => {
  const ProductListItems = products.items.map(
    ({ id, picture, title, price, free_shipping: freeShipping, address }) => (
      <li key={id} className='productlist__item'>
        <Link to={`${PRODUCT_LIST_PATH}/${id}`}>
          <ProductItem
            picture={picture}
            title={title}
            price={price}
            freeShipping={freeShipping}
            address={address}
          />
        </Link>
      </li>
    ),
  )

  return (
    <Layout breadcrumb={products.categories}>
      <ul className='productlist'>{ProductListItems}</ul>
    </Layout>
  )
}

export { ProductList }
