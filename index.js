import React, {Component} from "react";
import ReactDOM from "react-dom";
import {hashHistory, Router} from "react-router";
// Router:
import routes from "./routes/routes";
//Components:
import Header from "./components/common/Header";


//Pages:

export default class App extends Component{
  render(){

    return(
      <div>
         <Header />
          <div id="view">
              {this.props.children}
          </div>
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
     <Router history={hashHistory} component={App} routes={routes}>
         {/*<Route path="/" component={HomePage}>*/}
            {/*<Route path="/tips" component={}/>*/}
            {/*<Route path="/about" component={}/>*/}
         {/*</Route>*/}
     </Router>
    )
    ,root)
