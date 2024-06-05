import { useState, createContext } from 'react'
import { fetchCharacters, fetchCharacterById } from '../services/api'

const CharacterContext = createContext()
const CharacterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState()
  const [character, setCharacter] = useState()
  const [favorite, setFavorite] = useState([])

  const getCharacters = async () => {
    let limit = 50
    let offset = 0
    setLoading(true)
    setCharacters(await fetchCharacters(limit, offset))
    setLoading(false)
  }

  const handleGetCharacter = async (id) => {
    setLoading(true)
    if (!character || character.results[0].id.toString() !== id.toString()) {
      setCharacter()
      setCharacter(await fetchCharacterById(id))
    }
    setLoading(false)
  }

  const handleFavorite = (character) => {
    console.log(character)
    const isFavorite = favorite.some((ele) => ele.id === character.id)
    if (!isFavorite) {
      setFavorite([...favorite, character])
    } else {
      const updateFavorities = favorite.filter((ele) => ele.id !== character.id)
      setFavorite(updateFavorities)
    }
  }

  return (
    <CharacterContext.Provider
      value={{
        loading,
        setLoading,
        characters,
        character,
        favorite,
        setFavorite,

        // FUNCTION
        getCharacters,
        handleGetCharacter,
        handleFavorite,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export { CharacterProvider }

export default CharacterContext
