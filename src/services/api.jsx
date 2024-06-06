import { MARVEL_KEY } from './helpers'

export const fetchCharacters = async (limit, offset) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/public/characters?limit=${limit}&offset=${offset}&${MARVEL_KEY()}`
    )
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
    return
  }
}

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}:443/v1/public/characters/${id}?${MARVEL_KEY()}`
    )
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
    return
  }
}
export const fetchComicsByCharacter = async (limit, id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}:443/v1/public/characters/${id}/comics?orderBy=focDate&limit=${limit}&${MARVEL_KEY()}`
    )
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
    return
  }
}
export const fetchSearchCharacter = async (word) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}:443/v1/public/characters?nameStartsWith=${word}&${MARVEL_KEY()}`
    )
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
    return
  }
}
