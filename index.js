import React, {Component} from "react";
import ReactDOM from "react-dom";
import {hashHistory, Route, Router} from "react-router";
//Components:
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Slider from "./components/Slider/Slider";
import ModalNewRecipe from "./components/ModalNewRecipe/ModalNewRecipe";
import RecipeData from "./components/RecipeData/RecipeData";

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
// const root = document.getElementById('root');
// ReactDOM.render(
//   <App/>,root)


const root = document.getElementById('root');
ReactDOM.render(
    (
     <Router history={hashHistory}>
         <Route path="/" component={App}>
            <Route path="/Tips" component={ModalNewRecipe}/>
            <Route path="/About" component={RecipeData}/>
         </Route>
     </Router>

    )



    ,root)
