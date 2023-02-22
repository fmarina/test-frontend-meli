/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useState } from 'react'
import { PRODUCT_API_URL } from 'features/common/utils/constants'

interface IProductsContextProvider {
  children: ReactNode
}

interface IAuthor {
  name: string
  lastname: string
}

export interface IPrice {
  currency: string
  amount: number
  decimals: string
}

export interface IProductItems {
  id: string
  title: string
  price: IPrice
  picture: string
  condition: string
  free_shipping: boolean
  address: string
}

export interface IProductDetailItems extends IProductItems {
  sold_quantity: number
  description: string
}

export type Products = {
  author: IAuthor
  categories: string[]
  items: IProductItems[]
}

export type ProductDetail = {
  author: IAuthor
  item: IProductDetailItems
  categories: string[]
}

export interface IProductContext {
  products: Products
  productDetail: ProductDetail
  getProducts: (search: string) => void
  getProductDetail: (id: string) => void
  loading: boolean
}

const ProductContext = createContext({} as IProductContext)

export const ProductsContextProvider = ({ children }: IProductsContextProvider) => {
  const [products, setProducts] = useState({} as Products)
  const [productDetail, setProductDetail] = useState({} as ProductDetail)
  const [loading, setLoading] = useState(false)

  const getProducts = async (search: string) => {
    setLoading(true)
    const url = `${PRODUCT_API_URL}${search}`
    const response = await fetch(url)
    if (!response.ok) {
      setLoading(false)
      return
    }
    const data = await response.json()
    setProducts(data)
    setLoading(false)
  }

  const getProductDetail = async (id: string) => {
    setLoading(true)
    const url = `${PRODUCT_API_URL}/${id}`
    const response = await fetch(url)
    if (!response.ok) {
      setLoading(false)
      return
    }
    const data = await response.json()
    setProductDetail(data)
    setLoading(false)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        productDetail,
        getProducts,
        getProductDetail,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
