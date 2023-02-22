import './Button.scss'

import type { ButtonProps } from './types'

const Button = ({ buttonText, handleOnClick }: ButtonProps) => (
  <button className='button' type='button' onClick={handleOnClick}>
    {buttonText}
  </button>
)

export { Button }
