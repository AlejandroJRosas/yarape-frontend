import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from './screens/home'
import { Stats } from './screens/stats'
import { Form } from './screens/form'
import { PageNotFound } from './screens/pageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
