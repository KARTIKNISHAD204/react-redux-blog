
import * as types from '../Redux/actiontype';

const initialState = {
    blogs : [],
    posts : [],
    sidebar : [],
};

const reducer =(state=initialState,action)=>{
   
    const newstate = {...state}

   
        switch(action.type){
            case types.SHOW_HOME:
            return  {
                ...state, 
                blogs : [action.payload]}
            case types.SHOW_POST:
            return  {
                ...state, 
                posts : [action.payload]}
            case types.SHOW_SIDEBAR:
             return  {
                ...state, 
                sidebar : [action.payload]}    
                
            default:
                return newstate;
        }
        
    
   

}
export default reducer;