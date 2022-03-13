import React, { useContext, createContext, useState, useEffect } from "react"

export type menu = {
  menuVis: boolean
  setMenuVis: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext<menu>({
  menuVis: false,
  setMenuVis: () => {},
})

export const useMenu = () => useContext(MenuContext)

export const MenuProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [menuVis, setMenuVis] = useState(false)

  return (
    <MenuContext.Provider value={{ menuVis, setMenuVis }}>
      {children}
    </MenuContext.Provider>
  )
}
