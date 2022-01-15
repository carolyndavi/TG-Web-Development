import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import IntroductionPart1 from './pages/Introduction-Part-1/IntroductionPart1'
import IntroductionPart2 from './pages/Introduction-Part-2/IntroductionPart2'
import SharedState from './pages/SharedState/SharedState'
import ListsAndKeys from './pages/ListsAndKeys/ListsAndKeys'
import Lifecycle from './pages/Lifecycle/Lifecycle'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/introduction-part-1' element={<IntroductionPart1 />} />
      <Route path='/introduction-part-2' element={<IntroductionPart2 />} />
      <Route path='/shared-state' element={<SharedState />} />
      <Route path='/lists-and-keys' element={<ListsAndKeys />} />
      <Route path='/lifecycle' element={<Lifecycle />} />
    </Routes>
  )
}

export default App
