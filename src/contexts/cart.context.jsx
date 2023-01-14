import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
    if(existingCartItem)
        return cartItems.map((item) =>
            item.id === existingCartItem.id ?
            {...item, quantity : item.quantity + 1} : item
        );
    return [...cartItems, {...productToAdd,quantity: 1}];
}
const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1)
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);

    return cartItems.map((item) =>
        item.id === existingCartItem.id ?
        {...item, quantity : item.quantity - 1} : item
        );
}
const itemToClear = (cartItems, cartItemToRemove) => 
    cartItems.filter((item) => item.id !== cartItemToRemove.id);
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    countItems: 0,
    removeItemFromCart: () => {},
    clearCartItem: () => {},
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearCartItem = (cartItemToRemove) => {
        setCartItems(itemToClear(cartItems, cartItemToRemove));
    }

    useEffect(()=>{
        const newCount = cartItems.reduce((accumulator, item) => accumulator + item.quantity,0);
        setCountItems(newCount);
    },[cartItems])

    useEffect(()=>{
        const newTotal = cartItems.reduce((accumulator, item) => accumulator + item.price*item.quantity,0);
        setCartTotal(newTotal)
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, countItems, removeItemFromCart, clearCartItem, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}