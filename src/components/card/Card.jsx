import './card.css'
import { Link } from 'react-router-dom'
import { FavoriteTrue, FavoriteFalse } from '../favorite/Favorite'
import useCharacters from '../../hook/useCharacters'

const Card = ({ character }) => {
  const { favorite, setFavorite, handleGetCharacter } = useCharacters()

  const handleFavorite = (character) => {
    const isFavorite = favorite.some((ele) => ele.id === character.id)
    if (!isFavorite) {
      setFavorite([...favorite, character])
    } else {
      const updateFavorities = favorite.filter((ele) => ele.id !== character.id)
      setFavorite(updateFavorities)
    }
  }

  const isFavorite = favorite.some(
    (el) => el.id.toString() === character.id.toString()
  )

  return (
    <div className="card-character">
      <Link to={`/character/${character.id}`}>
        <div
          className="image-card"
          onClick={() => handleGetCharacter(character.id)}
        >
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={`${character.name}`}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="contain-card">
        <h2>{character.name}</h2>
        <div
          onClick={() => {
            handleFavorite(character)
          }}
        >
          {isFavorite ? <FavoriteTrue /> : <FavoriteFalse />}
        </div>
      </div>
    </div>
  )
}

export default Card
