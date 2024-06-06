import { Link } from 'react-router-dom'
import './hero.css'
import { FavoriteTrue, FavoriteFalse } from '../favorite/Favorite'
import useCharacters from '../../hook/useCharacters'
const Hero = () => {
  const { favorite } = useCharacters()
  return (
    <div className="hero">
      <Link to="./">
        <svg
          width="130"
          height="52"
          viewBox="0 0 130 52"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8936_731)">
            <path d="M130 0H0V52H130V0Z" fill="#EC1D24" />
            <path
              d="M126.222 40.059V47.965H111.58V4H119.465V40.059H126.222ZM63.658 25.559C63.048 25.853 62.41 25.999 61.788 26.001V11.861H61.828C62.45 11.856 67.092 12.045 67.092 18.854C67.092 22.413 65.512 24.658 63.658 25.559ZM40.55 34.24L42.733 15.441L44.998 34.24H40.55ZM110.205 12.025V4.007H87.879L84.204 30.786L80.574 4.006H72.522L73.423 11.156C72.495 9.324 69.199 4.006 61.943 4.006C61.896 4.004 53.883 4.006 53.883 4.006L53.852 43.038L47.984 4.007L37.439 4.002L31.367 44.442L31.369 4.007H21.278L17.64 26.724L14.096 4.006H4V47.972H11.95V26.78L15.568 47.972H19.794L23.359 26.78V47.972H38.686L39.614 41.21H45.784L46.711 47.972L61.758 47.98H61.768V47.972H61.788V33.702L63.633 33.432L67.45 47.982H75.234L75.232 47.972H75.254L70.243 30.924C72.781 29.044 75.649 24.28 74.886 19.721V19.719C74.894 19.777 79.615 48 79.615 48L88.871 47.973L95.198 8.123V47.973H110.205V40.065H103.081V29.985H110.205V21.955H103.081V12.024L110.205 12.025Z"
              fill="#FEFEFE"
            />
            <path d="M0 0H30V52H0V0Z" fill="#EC1D24" />
            <path
              d="M31.5 48V4H21.291L17.651 26.735L14.102 4H4V48H12V26.792L15.577 48H19.806L23.374 26.792V48H31.5Z"
              fill="#FEFEFE"
            />
          </g>
          <defs>
            <clipPath id="clip0_8936_731">
              <rect width="130" height="52" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div>
        {favorite.length ? (
          <Link to="/favorites">
            <div className="favoritesLength">
              <FavoriteTrue />
              <span>{favorite?.length}</span>
            </div>
          </Link>
        ) : (
          <FavoriteFalse />
        )}
      </div>
    </div>
  )
}

export default Hero
