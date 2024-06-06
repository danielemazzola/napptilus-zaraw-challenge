import './search.css'
import useCharacters from '../../hook/useCharacters'
import { useEffect, useState } from 'react'
import Card from '../card/Card'

const Search = ({ length }) => {
  const { handleSearch, getCharacters, resultSearch, setResultSearch } =
    useCharacters()
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const onSearchClick = () => {
    handleSearch(searchTerm)
  }
  useEffect(() => {
    if (searchTerm === '') {
      getCharacters()
      setResultSearch([])
    }
  }, [searchTerm])

  return (
    <div className="container-search">
      <div>
        <button type="button" onClick={onSearchClick}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              d="M11.9062 10.9922C12.0234 11.1094 12.0234 11.2969 11.9062 11.3906L11.3672 11.9297C11.2734 12.0469 11.0859 12.0469 10.9688 11.9297L8.13281 9.09375C8.08594 9.02344 8.0625 8.95312 8.0625 8.88281V8.57812C7.19531 9.30469 6.09375 9.75 4.875 9.75C2.17969 9.75 0 7.57031 0 4.875C0 2.20312 2.17969 0 4.875 0C7.54688 0 9.75 2.20312 9.75 4.875C9.75 6.09375 9.28125 7.21875 8.55469 8.0625H8.85938C8.92969 8.0625 9 8.10938 9.07031 8.15625L11.9062 10.9922ZM4.875 8.625C6.9375 8.625 8.625 6.96094 8.625 4.875C8.625 2.8125 6.9375 1.125 4.875 1.125C2.78906 1.125 1.125 2.8125 1.125 4.875C1.125 6.96094 2.78906 8.625 4.875 8.625Z"
              fill="black"
            />
          </svg>
        </button>

        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="SEARCH CHARACTER..."
        />
      </div>
      {resultSearch.message && <p> Sin resultados</p>}
      <p>{resultSearch?.results?.length || length} results</p>
      {resultSearch?.results?.length > 0 && (
        <div>
          <div className="container">
            {resultSearch.message ? (
              <p>Sin resultados</p>
            ) : (
              resultSearch?.results?.map((character, index) => (
                <div key={index}>
                  <Card character={character} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
