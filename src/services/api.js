const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchCharacters = async (name = '') => {
  const response = await fetch(
    `${API_URL}public/characters?nameStartsWith=${name}&apikey=${API_KEY}`
  )
  const data = await response.json()
  return data.data.results
}
