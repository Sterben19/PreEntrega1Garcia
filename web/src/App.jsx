import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar  />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <ItemListContainer greeting={'Bienvenidos a El mundo De Tulia 100% hecho a mano'} />
      <ItemDetailContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;