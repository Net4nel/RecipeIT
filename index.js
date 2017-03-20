import React, {Component} from "react";
import ReactDOM from "react-dom";
//Components:
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Slider from "./components/Slider/Slider";
//Pages:


export default class App extends Component{
  render(){

    return(
      <div>
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
