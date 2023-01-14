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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    countItems: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(()=>{
        const newCount = cartItems.reduce((accumulator, item) => accumulator + item.quantity,0);
        setCountItems(newCount);
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, countItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}