import React from 'react';
import Card from '../components/card'
import PostContainer from '../components/postContainer'
import Sidebar from '../components/sidebar'
import './index.css';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import * as types from '../Redux/actiontype'


 
const Post = (props) => {
    let id = props.location.search;
    id = id.replace('?','')
    const aboutsidebar = useSelector(state=>state.posts)
    

    const article = aboutsidebar.map(x=>x.filter(x=>x._id===id))
    console.log(props.location)
    console.log(props.location.state)
    console.log("postpage",article,id)
     
   
   
   
    const useFetching = () => {
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch({type:types.GET_POST});
        }, [dispatch])
      }
    return (
        
        <div  >
            {useFetching()}
        
            {console.log("aboutsidebar",aboutsidebar)}
        <div className="onbanner">
            {
                article.map(item =>                   
                          <Card  
                          key={item[0]._id}
                          image={item[0].media}
                          title ={item[0].title}
                          />
                    
                )
            }
      
        </div>
        <div className="belowbanner">
            <div className="layout">
            {
                article.map((item)=>{
                    return <div key={item[0]._id}>
                          <PostContainer  
                          title={item[0].title}
                          summary={item[0].summary}
                          published_date={item[0].published_date}
                          topic={item[0].topic}
                          country={item[0].country}
                          
                          />
                    </div>
                })
            }
            </div>           
        </div>
    </div>
    );
}
 

 
export default Post;