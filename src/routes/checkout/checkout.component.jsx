import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-tem/checkout-item.compopnent';
import PaymentForm from '../../components/payment-form/payment-form.component';
const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
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
            <PaymentForm/>
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
};

export default CheckOut;