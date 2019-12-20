import { useState } from 'react'
export const useToggleState = initialValue => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = () => setValue(!value)

  return [value, toggleValue]
}
