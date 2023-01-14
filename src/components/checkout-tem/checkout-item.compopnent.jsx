import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const CheckoutItem = ({item}) => {

    const {name, imageUrl, price, quantity} = item;
    const {clearCartItem, addItemToCart, removeItemFromCart} = useContext(CartContext)
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemFromCart(item)}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItemToCart(item)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearCartItem(item)}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;