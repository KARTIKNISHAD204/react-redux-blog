import React from 'react';
import Card from '../components/card'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import './index.css'
import { useSelector} from "react-redux";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import * as action from '../Redux/action'
import * as types from '../Redux/actiontype'
 
const About = () => {
    const aboutsidebar = useSelector(state=>state.sidebar)
    
   
   
    const useFetching = () => {
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch({type:types.GET_SIDEBAR});
        }, [dispatch])
      }

     const aboutdata=()=>{
         return <div>
         <h1> THIS IS ABOUT PAGE </h1>

         </div>
     } 
    
    return (
        <div>
            <div className="belowbanner">
               {useFetching()}
                    <div className="layout">
                      <Layout  aboutdata={aboutdata()}/>
                        
                    </div>
                    
                    <div className="sidebar">
                    <Sidebar   blogs = {aboutsidebar}/>
                    </div>
                </div>
        </div>
    );
}
 

 
export default About;