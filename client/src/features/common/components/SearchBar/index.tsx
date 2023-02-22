import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PRODUCT_LIST_PATH } from 'features/common/utils/constants'
import { SearchBar as SearchBarComponent } from './SearchBar'

import './SearchBar.scss'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery) {
      navigate(`${PRODUCT_LIST_PATH}?search=${searchQuery}`)
    }
  }

  return (
    <SearchBarComponent
      searchQuery={searchQuery}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  )
}

export { SearchBar }
