import React from 'react';
import { ListGroup } from 'react-bootstrap'; // Importar el componente ListGroup de React Bootstrap
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <ListGroup className='ListGroup'> {/* Usando el componente ListGroup de React Bootstrap */}
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </ListGroup>
  );
};

export default ItemList;
