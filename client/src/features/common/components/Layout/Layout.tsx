import { Breadcrumb } from 'features/common/components/Breadcrumb'
import { NavBar } from 'features/common/components/NavBar'

import './Layout.scss'

import type { LayoutProps } from './types'

const Layout = ({ children, breadcrumb = [] }: LayoutProps) => (
  <>
    <header>
      <NavBar />
    </header>
    {breadcrumb.length ? <Breadcrumb categories={breadcrumb} /> : null}
    <main>{children}</main>
  </>
)

export { Layout }
