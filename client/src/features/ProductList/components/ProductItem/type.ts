import { IPrice } from 'context/products'

export type ProductItemProps = {
  picture: string
  title: string
  price: IPrice
  freeShipping: boolean
  address: string
}
