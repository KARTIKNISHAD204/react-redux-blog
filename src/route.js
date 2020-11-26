import React, { Component } from 'react';
import Home from "./pages/home"
import Privacy from './pages/privacy';
import About from './pages/about';
import Post from './pages/post';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';

 

export default class routeviews extends React.Component {
    render() { 
        return (
            <div>
               
            <Switch>
            <Route path='/' exact strict component={Home}/>
            <Route path='/privacy' exact strict component={Privacy}/>
            <Route path='/about' exact strict component={About}></Route>
            <Route path='/post/:posturl' exact strict component={Post}/>
            </Switch>   
                       
            </div>
        );
    }
}
 



