import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Precio: ${price}
        </p>
        <p className='Info'>
          Stock disponible: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
        {/* Utilizando Button de React Bootstrap */}
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
        {/* O si prefieres, puedes usar solo la clase de Bootstrap */}
        {/* <Link to={`/item/${id}`} className='btn btn-primary'>Ver detalle</Link> */}
      </footer>
    </article>
  );
};

export default Item;
