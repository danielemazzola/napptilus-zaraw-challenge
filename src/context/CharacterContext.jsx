import { createContext } from 'react'
const CharacterContext = createContext()
const CharacterProvider = ({ children }) => {
  return (
    <CharacterContext.Provider value={{}}>{children}</CharacterContext.Provider>
  )
}

export { CharacterProvider }

export default CharacterContext
