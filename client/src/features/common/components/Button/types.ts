import { MouseEvent } from 'react'

export type ButtonProps = {
  buttonText: string
  handleOnClick: (event: MouseEvent<HTMLButtonElement>) => void
}
