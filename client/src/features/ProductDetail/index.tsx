import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductContext, { IProductContext as IProductContextType } from 'context/products'

import { Layout } from 'features/common/components/Layout'
import { Loading } from 'features/common/components/Loading'
import { ProductDetail as ProductDetailComponent } from './ProductDetail'

const ProductDetail = () => {
  const { id } = useParams()
  const { getProductDetail, productDetail, loading } =
    useContext<IProductContextType>(ProductContext)

  const { item, categories } = productDetail

  useEffect(() => {
    if (id) getProductDetail(id)
  }, [])

  if (loading) {
    return (
      <Layout>
        <div className='loading'>
          <Loading />
        </div>
      </Layout>
    )
  }

  if (!Object.keys(productDetail).length) {
    return (
      <Layout>
        <p className='error-message'>No se pudo obtener el detalle del producto</p>
      </Layout>
    )
  }

  return <ProductDetailComponent categories={categories} productDetail={item} />
}

export { ProductDetail }
