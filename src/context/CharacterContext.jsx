import { useState, createContext } from 'react'
import {
  fetchCharacters,
  fetchCharacterById,
  fetchComicsByCharacter,
  fetchSearchCharacter,
} from '../services/api'

const CharacterContext = createContext()
const CharacterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState()
  const [character, setCharacter] = useState()
  const [comics, setComics] = useState()
  const [favorite, setFavorite] = useState([])
  const [resultSearch, setResultSearch] = useState([])

  const getCharacters = async () => {
    let limit = 50
    let offset = 0
    setLoading(true)
    setCharacters(await fetchCharacters(limit, offset))
    setLoading(false)
  }

  const handleGetCharacter = async (id) => {
    let limit = 20
    setLoading(true)
    if (!character || character.results[0].id.toString() !== id.toString()) {
      setCharacter()
      setComics()
      setCharacter(await fetchCharacterById(id))
      setComics(await fetchComicsByCharacter(limit, id))
    }
    setLoading(false)
  }

  const handleFavorite = (character) => {
    const isFavorite = favorite.some((ele) => ele.id === character.id)
    if (!isFavorite) {
      setFavorite([...favorite, character])
    } else {
      const updateFavorities = favorite.filter((ele) => ele.id !== character.id)
      setFavorite(updateFavorities)
    }
  }

  const handleSearch = async (word) => {
    try {
      setLoading(true)
      setResultSearch(await fetchSearchCharacter(word))
      if (resultSearch <= 0) setResultSearch({ message: 'Sin resultados' })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CharacterContext.Provider
      value={{
        loading,
        setLoading,
        characters,
        character,
        comics,
        favorite,
        setFavorite,
        resultSearch,
        setResultSearch,

        // FUNCTION
        getCharacters,
        handleGetCharacter,
        handleFavorite,
        handleSearch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export { CharacterProvider }

export default CharacterContext
