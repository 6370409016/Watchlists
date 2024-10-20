
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import MovieDetails from './component/MovieDetails'
import WatchLists from './component/WatchLists'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'
import Aunthentication from './component/Aunthentication'

function App() {

  return (
    <Aunthentication>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:imdbId' element={<MovieDetails />} />
        <Route path='/mywatchlists' element={<WatchLists />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Aunthentication>


  )
}

export default App
