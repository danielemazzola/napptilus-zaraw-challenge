import './favorites.css'
import useCharacters from '../../hook/useCharacters'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'

const FavoriteDetails = () => {
  const { favorite } = useCharacters()
  if (!favorite.length)
    return (
      <div className="margin">
        <Search length={favorite.length} />
        <p>You have no favorites 😢. Please click the logo to return home.</p>
      </div>
    )
  else
    return (
      <div className="margin">
        {/*         <Search length={favorite.length} /> */}
        <div className="containerFavorite">
          <div>
            <h1>Favorites</h1>
          </div>
          <div className="containerCards">
            {favorite
              ?.map((character, index) => (
                <div key={index}>
                  <Card character={character} />
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    )
}

export default FavoriteDetails
