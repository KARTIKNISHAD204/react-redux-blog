import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
 
const card = (props) => {
    console.log(props)
    return (
        <div className="card">
           
            <img width="1344px" height="440px" src={props.image ? props.image :"https://images2.markets.businessinsider.com/5fb778b450e71a0011556642?format=jpeg" }/>
            
            
            { 
            props.title ? 
            <div className="centered">{props.title}</div>
            :
            <div className="centered">'Big Short' investor Michael Burry, the man who predicted the 2008 housing collapse</div>



            }        </div>
    );
}
 
card.propTypes = {};
 
export default card;