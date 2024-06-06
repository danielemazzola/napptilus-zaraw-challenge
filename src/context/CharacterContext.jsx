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
  const [searchTerm, setSearchTerm] = useState('')

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
    setLoading(true)
    const result = await fetchSearchCharacter(word)
    if (result.results <= 0) setResultSearch({ message: 'Sin resultados' })
    else setResultSearch(result)
    setLoading(false)
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
        searchTerm,
        setSearchTerm,

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
