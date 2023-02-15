
export const NewReducer=(state=[],action)=>{
    if(action.type === "ADD_USER"){
        return[...state,action.payload]
    } else return state}