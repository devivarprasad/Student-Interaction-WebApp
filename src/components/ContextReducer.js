import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{company_name:action.name,experience:action.experience}]
        case "DROP":
            let newAr=[]
            return newAr
        default:
            console.log("Error in Reducer")
            return
    }
}

export const CartProvider=({children})=>{

    const [state,dispatch] =useReducer(reducer,[])
    
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart= ()=> useContext(CartDispatchContext);