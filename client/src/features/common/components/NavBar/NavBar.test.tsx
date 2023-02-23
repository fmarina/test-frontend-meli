import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { NavBar } from 'features/common/components/NavBar'

describe('NavBar Test', () => {
  test('Render NavBar component', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>,
    )
    expect(container).toBeInTheDocument()
  })

  it('NavBar should have a link', () => {
    const { getByRole } = render(
      <Router>
        <NavBar />
      </Router>,
    )
    const link = getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('NavBar should have the SearchBar component', () => {
    const { getByRole } = render(
      <Router>
        <NavBar />
      </Router>,
    )
    const searchForm = getByRole('search')
    expect(searchForm).toBeInTheDocument()
  })
})
