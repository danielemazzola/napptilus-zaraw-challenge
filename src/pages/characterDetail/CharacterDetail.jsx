import './characterDetail.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useCharacters from '../../hook/useCharacters'
import { FavoriteTrue, FavoriteFalse } from '../../components/favorite/Favorite'
const CharacterDetail = () => {
  const location = useLocation()
  let id = location.pathname.split('/')[2]
  const { handleGetCharacter, character, favorite, handleFavorite } =
    useCharacters()

  useEffect(() => {
    handleGetCharacter(id)
  }, [])
  const isFavorite = favorite.some(
    (el) => el.id.toString() === character?.results[0].id.toString()
  )
  return (
    <div>
      {character?.results.map((val, index) => (
        <div key={index} className="characterContainer">
          <div className="container-image">
            <img
              src={`${val.thumbnail.path}.${val.thumbnail.extension}`}
              alt={val.name}
              loading="lazy"
            />
          </div>
          <div className="container-description">
            <div className="container-title">
              <h2>{val.name}</h2>
              <div
                onClick={() => {
                  handleFavorite(character.results[0])
                }}
              >
                {isFavorite ? <FavoriteTrue /> : <FavoriteFalse />}
              </div>
            </div>
            <p>{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CharacterDetail
