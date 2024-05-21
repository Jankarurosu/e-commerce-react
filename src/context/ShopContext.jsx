import { createContext, useState } from "react";
import all_product from '../components/assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const contextValue = { all_product, cartItems }

    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
