import { Outlet } from 'react-router-dom'
import useCharacters from '../../hook/useCharacters'
import Hero from '../../components/hero/Hero'
import Loader from '../../components/loader/Loader'

const LayoutMarvel = () => {
  const { loading } = useCharacters()
  return (
    <main>
      <Hero />
      <Outlet />
      {loading && <Loader />}
    </main>
  )
}

export default LayoutMarvel
