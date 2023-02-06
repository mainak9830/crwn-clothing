import './checkout-item.styles.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCartItems} from '../../store/cart/cart.selector';
import { addItemToCart, clearCartItem, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = item;
    const cartItems = useSelector(selectCartItems);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItemFromCart(cartItems, item))}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => dispatch(addItemToCart(cartItems, item))}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> dispatch(clearCartItem(cartItems, item))}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;