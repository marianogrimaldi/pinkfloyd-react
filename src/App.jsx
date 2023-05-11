
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Info from './Components/Info/info';
import Gallery from './Components/Gallery/gallery';
import Home from './Components/Home/home';
import ScrollToTop from './ScrollToTop';
import { CartProvider } from './Context/CartContex';
import Cart from './Components/Cart/Cart';

import './App.css'




function App() {
  

  return (
    
      <div className="App">
         <CartProvider>
          <BrowserRouter>
            <ScrollToTop/>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/info" element={<Info/>}/> 
                <Route path="/itemList" element={<ItemListContainer/>}/>     
                <Route path="/itemList/:decadaCd" element={<ItemListContainer/>}/>
                <Route path="/detail/:idCd" element={<ItemDetailContainer/>}/>
                <Route path="/gallery" element={<Gallery/>}/> 
                <Route path='/cart' element={ <Cart/> }/> 
                <Route path="*" element={<Navigate to={"/"}/>}/>
              </Routes>
            <Footer/>
          </BrowserRouter>
          </CartProvider>
      </div>
    
  )
}

export default App
