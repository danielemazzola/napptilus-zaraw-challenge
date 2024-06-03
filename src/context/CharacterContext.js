import React, { createContext, useState, useContext } from 'react'

const CharacterContext = createContext()

export const useCharacters = () => {
  return useContext(CharacterContext)
}

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (character) => {
    setFavorites([...favorites, character])
  }

  const removeFromFavorites = (characterId) => {
    setFavorites(favorites.filter((c) => c.id !== characterId))
  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
