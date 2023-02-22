import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ProductContext, { IProductContext } from 'context/products'
import { Layout } from 'features/common/components/Layout'
import { Loading } from 'features/common/components/Loading'
import { ProductList as ProductListComponent } from './ProductList'

const ProductList = () => {
  const { search } = useLocation()
  const { getProducts, products, loading } = useContext<IProductContext>(ProductContext)
  const { items } = products

  useEffect(() => {
    getProducts(search)
  }, [search])

  if (loading)
    return (
      <Layout>
        <div className='loading'>
          <Loading />
        </div>
      </Layout>
    )

  if (!Object.keys(products).length || !items.length) {
    return (
      <Layout>
        <p className='error-message'>No se encontraron productos</p>
      </Layout>
    )
  }

  return <ProductListComponent products={products} />
}

export { ProductList }
