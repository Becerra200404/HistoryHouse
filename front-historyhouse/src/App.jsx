import { Routes, Route } from 'react-router-dom'

import Home from './componente/Libro'
import Libro from './componente/Libro'
import Navbar from './inicio/Navbar'


const App = () => {
  return (
    < >

      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path='./' element={<Home></Home>}></Route>
          <Route part='./Libro' element={<Libro></Libro>}></Route>


        </Routes>
      </div>


    </>
  )
}

export default App



