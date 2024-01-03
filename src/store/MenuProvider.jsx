import { createContext, useMemo, useState, useContext } from 'react'

const MenuContext = createContext()
MenuContext.displayName = 'MenuContext'
export const useMenu = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const MenuObject = useMemo(() => {
    return { menu, setMenu }
  }, [menu, setMenu])
  return (
    <MenuContext.Provider value={MenuObject}>{children} </MenuContext.Provider>
  )
}
export default MenuProvider
