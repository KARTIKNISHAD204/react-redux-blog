import * as types from './actiontype'

export function  getBlogHome(){
    return {
        type : types.GET_HOME,
    };
}
export  function showBlogHome(payload){
    return {
        type : types.SHOW_HOME,
        payload:payload
    };
}
export function  getBlogPost(){
    return {
        type : types.GET_POST,
    };
}

export  function showBlogPost(payload){
    return {
        type : types.SHOW_POST,
        payload:payload
    };
}
export function  getSidebar(){
    return {
        type : types.GET_SIDEBAR,
    };
}

export  function showSidebar(payload){
    return {
        type : types.SHOW_SIDEBAR,
        payload:payload
    };
}
