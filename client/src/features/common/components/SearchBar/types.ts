import { ChangeEvent, FormEvent } from 'react'

export type SearchBarProps = {
  searchQuery: string
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void
}
