import './favorites.css'
import useCharacters from '../../hook/useCharacters'
import Card from '../../components/card/Card'

const FavoriteDetails = () => {
  const { favorite } = useCharacters()

  if (!favorite.length)
    return (
      <div className="container">
        You have no favorites 😢. Please click the logo to return home.
      </div>
    )
  else
    return (
      <div className="margin">
        <div className="container">
          {favorite
            ?.map((character, index) => (
              <div key={index}>
                <Card character={character} />
              </div>
            ))
            .reverse()}
        </div>
      </div>
    )
}

export default FavoriteDetails
