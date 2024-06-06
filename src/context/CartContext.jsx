import { createContext,useReducer } from "react";

export const CartContext = createContext();

const reducer = (state,action)=>{
    switch (action.type){
        case "ADD":
            let cartItem = action.payload;
            // letoldCartItem = state.cart.find((c)) => c._id === cartItem._id);
            let itemIndex = state.cart.findIndex((c) => c._id == cartItem._id);
            if(itemIndex !== -1){
                let newCart = [ ...state.cart];
                newCart[itemIndex].qty += 1;
                return{...state,cart: newCart};
            }
             cartItem.qty =1;
            return {...state,cart: [...state.cart,cartItem]};
            case 'UPDATE':
            let qty = action.payload.qty;
            let _id= action.payload._id;
            let itemIdx = state.cart.findIndex((c) => c._id == _id);
            let newCart = [...state.cart];
            newCart[itemIdx].qty=qty;
            return {...state,cart: newCart };
            case "DELETE":
                let itemId = action.payload;
                console.log(itemId);
                return {...state,cart: state.cart.filter((c) => c._id !=itemId)};
                case "CLEAR":
                    return {...state,cart:[]};
    }
};

export default function CartProvider({children}){
    const [state,dispatch] = useReducer(reducer,{
        cart:[],
    });
return <CartContext.Provider value ={{...state,dispatch}}>{children}</CartContext.Provider>;
} 
