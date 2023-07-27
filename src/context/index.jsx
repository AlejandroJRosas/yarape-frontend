import { useState } from 'react'
import { formContext } from './formContext'

export const MyProviders = ({ children }) => {
  const [name, setName] = useState(null)
  const [isUcabMember, setIsUcabMember] = useState(null)
  const [footprint, setFootprint] = useState(0)
  const [campusId, setCampusId] = useState(null)
  const [role, setRole] = useState(null)
  const [careerId, setCareerId] = useState(null)
  const [items, setItems] = useState({})
  const [userHagFP, setUserHagFP] = useState(null)
  const [earthQuantity, setEarthQuantity] = useState(null)
  const [hag, setHag] = useState(null)

  return (
    <formContext.Provider
      value={{
        name,
        setName,
        isUcabMember,
        setIsUcabMember,
        footprint,
        setFootprint,
        campusId,
        setCampusId,
        role,
        setRole,
        careerId,
        setCareerId,
        items,
        setItems,
        userHagFP,
        setUserHagFP,
        earthQuantity,
        setEarthQuantity,
        hag,
        setHag
      }}
    >
      {children}
    </formContext.Provider>
  )
}
