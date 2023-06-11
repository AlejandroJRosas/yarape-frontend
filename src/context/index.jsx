import { useState } from 'react'
import { formContext } from './formContext'

export const MyProviders = ({ children }) => {
  const [userName, setUserName] = useState(null)
  const [userFootprint, setUserFootprint] = useState(null)
  const [userHagFP, setUserHagFP] = useState(null)
  const [earthQuantity, setEarthQuantity] = useState(null)

  return (
    <formContext.Provider
      value={{
        userName,
        setUserName,
        userFootprint,
        setUserFootprint,
        userHagFP,
        setUserHagFP,
        earthQuantity,
        setEarthQuantity
      }}
    >
      {children}
    </formContext.Provider>
  )
}
