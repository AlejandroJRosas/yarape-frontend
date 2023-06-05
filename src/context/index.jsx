import { useState } from 'react'
import { formContext } from './formContext'

export const MyProviders = ({ children }) => {
  const [userName, setUserName] = useState(null)
  const [userFootprint, setUserFootprint] = useState(null)
  const [isVegetarian, setIsVegetarian] = useState(null)

  return (
    <formContext.Provider
      value={{
        userName,
        setUserName,
        userFootprint,
        setUserFootprint,
        isVegetarian,
        setIsVegetarian
      }}
    >
      {children}
    </formContext.Provider>
  )
}
