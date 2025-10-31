import { useState } from 'react'

import RolesList from './pages/Roles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
<BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<RolesList/>}/>
        {/* <Route path='/roles' element={<Home/>}/>
        <Route path='/categories' element={<Login/>}/> */}

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
