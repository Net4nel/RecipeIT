import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import bootstrap from 'react-bootstrap'


//Components:
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Slider from './components/Slider/Slider'
import Modal from './components/Modal/Modal'

//Pages:
import HomePage from './pages/HomePage'
import About from './pages/About'
import Preferences from './pages/Preferences'


export default class App extends Component{
  render(){

    return(
      <div>
        {/*<Modal />*/}
         <Header />
         <Slider />
         <br/><br/><br/>
         <SideNav />
      </div>
    );
  }


}
const root = document.getElementById('root');
ReactDOM.render(
  <App/>,root)
