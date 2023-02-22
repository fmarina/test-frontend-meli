import { PRODUCT_LIST_PATH, PRODUCT_DETAIL_PATH, ROOT_PATH } from 'features/common/utils/constants'
import { Home } from 'features/Home'
import { ProductDetail } from 'features/ProductDetail'
import { ProductList } from 'features/ProductList'

export const routes = [
  {
    path: ROOT_PATH,
    element: <Home />,
    exact: true,
  },
  {
    path: PRODUCT_LIST_PATH,
    element: <ProductList />,
    exact: true,
  },
  {
    path: PRODUCT_DETAIL_PATH,
    element: <ProductDetail />,
    exact: true,
  },
]
