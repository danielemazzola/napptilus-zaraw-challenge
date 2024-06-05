import { useState, createContext } from 'react'
import { fetchCharacters, fetchCharacterById } from '../services/api'

const CharacterContext = createContext()
const CharacterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState()
  const [character, setCharacter] = useState()

  const getCharacters = async () => {
    let limit = 100
    let offset = 0
    setLoading(true)
    setCharacters(await fetchCharacters(limit, offset))
    setLoading(false)
  }

  const handleGetCharacter = async (id) => {
    setLoading(true)
    if (!character || character.results[0].id.toString() !== id.toString()) {
      setCharacter(await fetchCharacterById(id))
    }
    setLoading(false)
  }

  return (
    <CharacterContext.Provider
      value={{
        loading,
        setLoading,
        characters,
        character,

        // FUNCTION
        getCharacters,
        handleGetCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export { CharacterProvider }

export default CharacterContext
