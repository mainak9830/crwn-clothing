import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggle = () => {
        setIsCartOpen(!isCartOpen);
    }
    return  (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;

