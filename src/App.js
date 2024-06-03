import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={CharacterList} />
        <Route path="/character/:id" element={CharacterDetail} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
