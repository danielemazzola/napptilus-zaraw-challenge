import { useEffect } from 'react'
import './characters.css'
import useCharacters from '../../hook/useCharacters'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'
const CharacterList = () => {
  const { getCharacters, characters, resultSearch } = useCharacters()

  useEffect(() => {
    if (characters) return
    else getCharacters()
  }, [])

  return (
    <div className="margin">
      <Search length={characters?.count} />
      <div className="container">
        {resultSearch <= 0 && (
          <>
            {characters?.results?.map((character, index) => (
              <div key={index}>
                <Card character={character} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default CharacterList
