import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import SharedState from './pages/SharedState/SharedState'
import ListsAndKeys from './pages/ListsAndKeys/ListsAndKeys'
import Lifecycle from './pages/Lifecycle/Lifecycle'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/introduction' element={<Introduction />} />
      <Route path='/sharedState' element={<SharedState />} />
      <Route path='/listsAndKeys' element={<ListsAndKeys />} />
      <Route path='/lifecycle' element={<Lifecycle />} />
    </Routes>
  )
}

export default App
