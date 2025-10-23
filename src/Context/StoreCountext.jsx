import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})

    const addToCart = (itemId) => {
        if (!cartItem[itemId]){
            setCartItem((prev) => ({...prev, [itemId] : 1}))
        } else{
            setCartItem(prev => ( {...prev, [itemId]: prev[itemId] + 1 } ))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem(prev => ( {...prev, [itemId]: prev[itemId] - 1 } ))
    }

    const getTotalCartAmount = () => {
        let totalAmonut = 0;
        for(const item in cartItem)
        {
            if(cartItem[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmonut += itemInfo.price * cartItem[item];
            }
        }
        return totalAmonut;
    }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }

    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

    
}

export default StoreContextProvider;
