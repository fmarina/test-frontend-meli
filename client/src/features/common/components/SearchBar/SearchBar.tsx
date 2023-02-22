import SearchImg from 'assets/ic_Search.png'

import './SearchBar.scss'
import type { SearchBarProps } from './types'

const SearchBar = ({ searchQuery, handleOnChange, handleOnSubmit }: SearchBarProps) => (
  <form className='searchbar' onSubmit={handleOnSubmit} role='search'>
    <label className='searchbar__label' htmlFor='search'>
      <input
        className='searchbar__input'
        id='search'
        type='text'
        placeholder='Nunca dejes de buscar'
        value={searchQuery}
        onChange={handleOnChange}
      />
    </label>
    <button className='searchbar__button' type='submit'>
      <img src={SearchImg} alt='search' />
    </button>
  </form>
)

export { SearchBar }
