import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ?
                    
                    (cartItems.map((item) => <CartItem key={item.id} item={item}/>))
                    : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
                <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
            </CartItems>
        </CartDropDownContainer>
    )
};

export default CartDropDown;