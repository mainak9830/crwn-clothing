import { CartItemContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, countItems} = useContext(CartContext);
    //console.log("hey", countItems)
    const toggle = () => {
        setIsCartOpen(!isCartOpen);
    }
    return  (
        <CartItemContainer onClick={toggle}>
            <ShoppingIcon/>
            <ItemCount>{countItems}</ItemCount>
        </CartItemContainer>
    )
};

export default CartIcon;

