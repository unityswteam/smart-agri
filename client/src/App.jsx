import RolesList from './pages/Roles'
import CategoryList from './pages/Categories'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
<BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<RolesList/>}/>
        <Route path='/roles' element={<RolesList/>}/>
        <Route path='/categories' element={<CategoryList/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
