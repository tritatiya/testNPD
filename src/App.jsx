import { useState } from 'react'

import './App.css'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ItemListPage from './pages/ItemListPage'
import ItemPage from './pages/ItemPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/category/:id' element={<ItemListPage/>}/>
          <Route path='/item/:id' element={<ItemPage/>}/>
        </Routes>

    </div>
  )
}

export default App
