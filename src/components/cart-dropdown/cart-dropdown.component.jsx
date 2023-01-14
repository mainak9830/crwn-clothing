import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    
                    cartItems.map((item) => <CartItem key={item.id} item={item}/>)
                }
                <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
};

export default CartDropDown;