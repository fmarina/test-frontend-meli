import './Breadcrumb.scss'

import type { BreadcrumbProps } from './types'

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  const BreadcrumbList = categories.map((category) => (
    <li className='breadcrumb__item' key={category}>
      {category}
    </li>
  ))

  return <ul className='breadcrumb'>{BreadcrumbList}</ul>
}

export { Breadcrumb }
