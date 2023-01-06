import React, { createContext,useReducer } from "react";
import { CartReducer } from "./cartReducer";


export const CartContext=createContext();
const Strorage=localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
const initialState={cartItems:Strorage}

const CartContextProvider=(props)=>{
    const [state,dispatch]=useReducer(CartReducer,initialState)
    //add new product
    const addProduct=payload=>{
        dispatch({type:"ADD",payload})
        return state.cartItems   
    }
    //remove product
    const removeProduct=payload=>{
        dispatch({type:'REMOVE',payload});
        return state.cartItems 
    }
    const increaseQuantity=payload=>{
        dispatch({type:"IncreaseQuantity",payload})
        return state.cartItems 
    }
    const decreaseQuantity=payload=>{
        dispatch({type:"DecreaseQuantity",payload})
        return state.cartItems 
    }
    const clearBasket=()=>{
        dispatch({type:'CLEAR',payload:undefined})
        return state.cartItems 
    }
    const getItems=()=>{
        return state.cartItems  
    }


    const contextValues={
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
        ...state
    }


    return(
        <CartContext.Provider value={contextValues}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider