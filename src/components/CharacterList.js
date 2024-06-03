import React, { useEffect } from 'react'
import { useCharacters } from '../contexts/CharacterContext'
import { fetchCharacters } from '../services/api'

const CharacterList = () => {
  const { characters, setCharacters } = useCharacters()

  useEffect(() => {
    const getCharacters = async () => {
      const results = await fetchCharacters()
      setCharacters(results)
    }
    getCharacters()
  }, [setCharacters])

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default CharacterList
