import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-tem/checkout-item.compopnent';
const CheckOut = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            {
                cartItems.map((item) => {
                    
                    return (
                        <CheckoutItem key={item.id} item={item}/>
                    )
                })
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
};

export default CheckOut;