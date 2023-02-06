import { CartItemContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    //console.log("hey", countItems)
    const toggle = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return  (
        <CartItemContainer onClick={toggle}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartItemContainer>
    )
};

export default CartIcon;

