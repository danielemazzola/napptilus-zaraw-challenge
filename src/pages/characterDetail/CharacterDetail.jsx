import './characterDetail.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useCharacters from '../../hook/useCharacters'
import { FavoriteTrue, FavoriteFalse } from '../../components/favorite/Favorite'
import Comics from '../../components/comics/Comics'
const CharacterDetail = () => {
  const location = useLocation()
  let id = location.pathname.split('/')[2]
  const { handleGetCharacter, character, comics, favorite, handleFavorite } =
    useCharacters()

  useEffect(() => {
    handleGetCharacter(id)
  }, [])

  const isFavorite = favorite.some(
    (el) => el.id.toString() === character?.results[0].id.toString()
  )
  return (
    <div id="container-details">
      {character?.results.map((val, index) => (
        <div key={index} id="characterContainer">
          <div className="characterContainer">
            <div className="container-image">
              <img
                src={`${val.thumbnail.path.replace('http', 'https')}.${val.thumbnail.extension}`}
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
        </div>
      ))}
      <div className="containerComics">
        <div className="containComics">
          <div className="titleContainer">
            <h1>Comics</h1>
          </div>
          <div className="containComic">
            {comics?.results
              .map((ele, index) => (
                <div key={index}>
                  <Comics comic={ele} />
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail
