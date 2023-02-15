export const Reducer=(state= {allProducts:[],cart:[],selectedItems:{}},action)=>{
    if(action.data==="ALL_PRODUCTS"){
        return {...state,allProducts:action.data}
    }
    if(action.data==="CART"){
        return{...state,cart:[...state.cart,action.data]}
    }
    if(action.data=="SELECTED_ITEMS"){
        return {...state,selectedItems:action.data}
    }
    return state

}