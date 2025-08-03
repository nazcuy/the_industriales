import React from 'react';
import { Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import './CartWidget.scss'


const CartWidget = ({ itemCount = 0}) => {
    return (
        <div className="cart-widget position-relative">
            <BsCart3 size={24} className="cart-icon" />                  
            {itemCount > 0 && (
                <Badge bg="danger" pill className="cart-badge">
                    {itemCount}
                </Badge>
            )}
        </div>
        );
};

export default CartWidget;
