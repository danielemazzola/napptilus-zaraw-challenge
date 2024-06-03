import { useContext } from 'react'
import CharacterContext from '../context/CharacterContext'

const useCharacters = () => {
  return useContext(CharacterContext)
}

export default useCharacters
