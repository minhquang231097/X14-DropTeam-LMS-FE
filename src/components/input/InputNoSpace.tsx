import { Input, InputProps } from 'antd'
import { ChangeEvent } from 'react'

export type IInputNoSpaceProps = InputProps & {
  onChange?: (value: string) => void
}

export const InputNoSpace = ({ onChange = () => {}, ...otherProps }: IInputNoSpaceProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/\s/g, '')
    onChange(sanitizedValue)
  }
  return (
    <Input
      {...otherProps}
      onChange={handleInputChange}
    />
  )
}
