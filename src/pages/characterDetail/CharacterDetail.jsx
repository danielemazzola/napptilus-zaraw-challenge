import './characterDetail.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useCharacters from '../../hook/useCharacters'
const CharacterDetail = () => {
  const location = useLocation()
  let id = location.pathname.split('/')[2]
  const { handleGetCharacter, character } = useCharacters()

  useEffect(() => {
    handleGetCharacter(id)
  }, [])

  return (
    <div>
      {character?.results.map((val, index) => (
        <div key={index} className="characterContainer">
          <div className="container-image">
            <img
              src={`${val.thumbnail.path}.${val.thumbnail.extension}`}
              alt={val.name}
            />
          </div>
          <div className="container-description">
            <div className="container-title">
              <h2>{val.name}</h2>
              <svg
                width="24"
                height="21.68"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z"
                  fill="#EC1D24"
                />
              </svg>
            </div>
            <p>{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CharacterDetail
