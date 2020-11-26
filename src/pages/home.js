import React, { Component } from 'react';
 import Card from '../components/card'
 import Layout from '../components/layout'
 import Sidebar from '../components/sidebar'
 import './index.css';
 import {connect} from 'react-redux'
 import { bindActionCreators } from 'redux';
 import * as actions from '../Redux/action'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.actions.getBlogHome();

    }

    render() { 


        return (
            <div  >
               
                <div className="onbanner">
                    <Card/>
                </div>
                <div className="belowbanner">
                    <div className="layout">
                    <Layout   blogs = {this.props.blogs}/>
                    </div>
                    <div className="sidebar">
                    <Sidebar  blogs = {this.props.blogs} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return {
      blogs : state.blogs
  }
}
const mapDispatchToProps=(dispatch)=>{
    const actionToBind = Object.assign({},actions)
    return {
        actions : bindActionCreators(actionToBind,dispatch)
    }

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);
