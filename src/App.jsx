import { useState } from 'react'
import NavBarSup from './Components/NavBarSup/navBarSup'
import NavBar from './Components/Navbar/navBar'
import Footer from './Components/Footer/footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import DatosCds from './Components/DatosCds/datosCds'

import './App.css'




function App() {
  

  return (
    <div className="App">
     
      <div>
        <NavBarSup/>
      </div>
      <div>
       <NavBar />
      </div>

      <div>
        <ItemListContainer text="Select your favorite album..." />
        <DatosCds/>
      </div>

     <div>
      <Footer/>
     </div>

    </div>
    
  )
}

export default App
