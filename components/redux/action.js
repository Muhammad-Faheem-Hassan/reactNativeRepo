import {Add_TO_CART,Remove_From_CART,USER_LIST } from './constant'



export function addToCart(item ){
    return{
        type:Add_TO_CART,
        data : item
    }
}
export function removeFromCart(item ){
    return{
        type:Remove_From_CART,
        data : item
    }
}
    export function getUserList(item ){
        return{
            type:USER_LIST,
            
            
        }
}