import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffcanvasExample from './components/NavBar/NavBar'
import IndividualIntervalsExample from './components/Carousel/Carousel';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import DarkVariantExample from './components/DarkVariantExample/DarkVariantExample';
import { CartProvider } from './Context/CartContext'; // Importa CartProvider una vez
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
      <div className='App'>
        <BrowserRouter>
          <OffcanvasExample />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
        <DarkVariantExample />
      </div>
    </CartProvider>
  );
}

export default App;
