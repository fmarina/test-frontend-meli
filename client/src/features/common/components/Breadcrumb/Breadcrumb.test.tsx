import { render } from '@testing-library/react'

import { Breadcrumb } from 'features/common/components/Breadcrumb'

describe('Breadcrumb component', () => {
  test('Render Breadcrumb component', () => {
    const { container } = render(<Breadcrumb categories={[]} />)
    expect(container).toBeInTheDocument()
  })

  test('Breadcrumb should display the categories', () => {
    const categories = ['Computación', 'Laptops y Accesorios', 'Notebooks']
    const { getByText } = render(<Breadcrumb categories={categories} />)
    getByText('Computación')
    getByText('Laptops y Accesorios')
    getByText('Notebooks')
  })
})
