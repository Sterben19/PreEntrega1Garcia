import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem.jsx/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
              <h1>No hay productos en el carrito </h1>
              <link to='/' className='Options'>Productos</link>
            </div>
        )
        
    }
    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )

}

export default Cart
