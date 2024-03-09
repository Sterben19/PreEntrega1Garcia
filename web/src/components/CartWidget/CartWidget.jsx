import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi'; // Importa el icono de carrito de compras de react-icons/bi

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity  > 0 ? 'block' : 'none'}}>
      {/* Utiliza el icono BiCart de react-icons/bi */}
      <BiCart className='CartImg' />
      { totalQuantity }
    </Link>
  );
}

export default CartWidget;
