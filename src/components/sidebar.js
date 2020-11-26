import React from 'react';
import PropTypes from 'prop-types';
import SidebarCard from './sidebarcard'
 
const sidebar = (props) => {
    const blog = [...props.blogs];
    return (
        <div>
            {blog.map( (blogcard,index) => (
                blogcard.map((blogcard,index)=>(
                    <div  style={{ padding: "20px 0 20px 0"}} key = {blogcard._id}> 
                    <SidebarCard   
                    keys = {blogcard._id}  
                    title ={blogcard.title}
                    urlToImage = {blogcard.media}
                    description={blogcard.summary}
                    author = {blogcard.country}     
                   /></div>

                ))
           
        
           ))}
        </div>
    );
}
 
sidebar.propTypes = {};
 
export default sidebar;