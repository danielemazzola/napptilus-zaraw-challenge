import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutMarvel from './pages/layout/LayoutMarvel'
import CharacterList from './pages/charactersList/CharacterList'
import CharacterDetail from './pages/characterDetail/CharacterDetail'
import Error404 from './pages/error404/Error404'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMarvel />}>
          <Route index path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
