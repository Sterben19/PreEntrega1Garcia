import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <Card className='CardItem'>
      <Card.Header className='Header'>
        <Card.Title className='ItemHeader'>{name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Img src={img} alt={name} className='ItemImg' />
        <Card.Text className='Info'>Categoría: {category}</Card.Text>
        <Card.Text className='Info'>Descripción: {description}</Card.Text>
        <Card.Text className='Info'>Precio: ${price}</Card.Text>
      </Card.Body>
      <Card.Footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='Option'>Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </Card.Footer>
    </Card>
  );
};

export default ItemDetail;
