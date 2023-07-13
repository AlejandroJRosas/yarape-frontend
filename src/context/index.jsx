import { useState, useCallback } from 'react'
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

  const resetStateValues = useCallback(() => {
    setName(null)
    setIsUcabMember(null)
    setFootprint(0)
    setCampusId(null)
    setRole(null)
    setCareerId(null)
    setItems({})
    setUserHagFP(null)
    setEarthQuantity(null)
  }, [])

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
        resetStateValues
      }}
    >
      {children}
    </formContext.Provider>
  )
}
