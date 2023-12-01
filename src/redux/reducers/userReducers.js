const initialValue = {
    name : '',
    email : ''
}

export const userReducer = (state=initialValue, action)=>{
    if(action.type=="UPDATE"){
        return action.payload
    }
    else return state
}