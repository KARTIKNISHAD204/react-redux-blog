

import * as types from './actiontype';
import * as actions from './action'
import {
  put,
  all,
  takeLatest,
  call,
} from 'redux-saga/effects';
import blogdata  from '../data.json'

export const fetchData = async () => {
    try {
      const data = blogdata;    
      
      return data;
    } catch (e) {
      console.log(e);
    }
  };



function* getBlogforhomeFromServer(action) {
   
    const data = yield call(fetchData);
    if(data)
    { 
      yield all([
        put(actions.showBlogHome(data.articles)),
        put(actions.showBlogPost(data.articles)),
        put (actions.showSidebar(data.articles)),
    ]); 
    
    }
    
    
  }


export default function* watchBlogSagas() {
    yield all([yield takeLatest(types.GET_HOME, getBlogforhomeFromServer),
      yield takeLatest(types.GET_SIDEBAR, getBlogforhomeFromServer),
      yield takeLatest(types.GET_POST, getBlogforhomeFromServer)
    
    ]);
  }