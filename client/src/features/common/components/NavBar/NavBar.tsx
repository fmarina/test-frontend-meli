import { Link } from 'react-router-dom'

import { ROOT_PATH } from 'features/common/utils/constants'
import { SearchBar } from 'features/common/components/SearchBar'
import LogoML from 'assets/Logo_ML.png'

import './NavBar.scss'

const NavBar = () => (
  <nav className='navbar'>
    <Link to={ROOT_PATH}>
      <img className='navbar__logo' src={LogoML} alt='mercado libre' />
    </Link>
    <SearchBar />
  </nav>
)

export { NavBar }
