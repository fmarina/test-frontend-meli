import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import { SearchBar } from 'features/common/components/SearchBar'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('SearchBar Test', () => {
  test('Render SearchBar component', () => {
    const { container } = render(<SearchBar />)
    expect(container).toBeInTheDocument()
  })

  test('SearchBar should have an input', () => {
    const { container } = render(<SearchBar />)
    const input = container.querySelector('#search')
    expect(input).toBeInTheDocument()
  })

  test('SearchBar has an input with an onChange method', () => {
    const { getByPlaceholderText } = render(<SearchBar />)

    const input = getByPlaceholderText('Nunca dejes de buscar') as HTMLInputElement

    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'Mercado Libre' } })
    expect(input.value).toBe('Mercado Libre')
  })
})
