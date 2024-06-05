import { MARVEL_KEY } from './helpers'

export const fetchCharacters = async (limit, offset) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/public/characters?limit=${limit}&offset=${offset}&${MARVEL_KEY()}`
    )
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}:443/v1/public/characters/${id}?${MARVEL_KEY()}`
    )
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.log(error)
  }
}
