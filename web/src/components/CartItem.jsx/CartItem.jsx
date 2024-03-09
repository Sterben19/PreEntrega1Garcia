import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {
    return (
        <div className="CartItem">
            <p><strong>{name}</strong></p>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Total: ${quantity * price}</p>
        </div>
    );
}

export default CartItem;