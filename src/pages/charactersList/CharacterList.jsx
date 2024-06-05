import { useEffect } from 'react'
import './characters.css'
import { Link } from 'react-router-dom'
import useCharacters from '../../hook/useCharacters'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'
const CharacterList = () => {
  const { getCharacters, characters, handleGetCharacter } = useCharacters()

  useEffect(() => {
    if (characters) return
    else getCharacters()
  }, [])

  return (
    <div className="margin">
      <Search />
      <div className="container">
        {characters?.results?.map((character, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleGetCharacter(character.id)}
          >
            <Link to={`/character/${character.id}`}>
              <Card character={character} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterList
