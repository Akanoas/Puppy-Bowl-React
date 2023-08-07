import './App.css'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './pages/AllPlayers'
import SinglePlayer from './pages/SinglePlayer'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id'element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App
