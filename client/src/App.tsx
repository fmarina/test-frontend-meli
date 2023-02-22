import { ProductsContextProvider } from 'context/products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  const routesList = routes.map((route, i) => <Route key={i} {...route} />)
  return (
    <ProductsContextProvider>
      <Router>
        <Routes>{routesList}</Routes>
      </Router>
    </ProductsContextProvider>
  )
}

export default App
