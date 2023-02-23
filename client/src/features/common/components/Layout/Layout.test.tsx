import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { Layout } from 'features/common/components/Layout'

describe('Layout Test', () => {
  test('Render Layout component', () => {
    const { container } = render(
      <Router>
        <Layout />
      </Router>,
    )
    expect(container).toBeInTheDocument()
  })

  it('Layout should have the Searchbar component', () => {
    const { getByRole } = render(
      <Router>
        <Layout />
      </Router>,
    )
    const searchbar = getByRole('search')
    expect(searchbar).toBeInTheDocument()
  })

  it('Layout should display the Breadcrumb component', () => {
    const { container } = render(
      <Router>
        <Layout breadcrumb={['Notebooks']} />
      </Router>,
    )
    const breadcrumb = container.querySelector('.breadcrumb')
    expect(breadcrumb).toBeInTheDocument()
  })

  it('Layout should not display the Breadcrumb component', () => {
    const { container } = render(
      <Router>
        <Layout breadcrumb={[]} />
      </Router>,
    )
    const breadcrumb = container.querySelector('.breadcrumb')
    expect(breadcrumb).not.toBeInTheDocument()
  })

  it('Layout should have a children component', () => {
    const { container } = render(
      <Router>
        <Layout>
          <h1>Hello world!</h1>
        </Layout>
      </Router>,
    )
    const children = container.querySelector('h1')
    expect(children).toBeInTheDocument()
    expect(children?.textContent).toEqual('Hello world!')
  })
})
