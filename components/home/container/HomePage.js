import React, {Component} from "react";
import Link from 'react-router';

import SideNav from "../display/SideNav";
// import Slider from "../display/Slider";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
        <div className="back-wrapper-mid-page">
            <div className="wrapper-mid-page">
                <div className="top-img">
                    <img src="http://i68.tinypic.com/s45aag.png" className="slider-img"></img>
                </div>
                <div className="click-here-for-recipe">
                    <a href="recipes">לחצו לאוסף המתכונים המלא!</a>
                </div>
                {/*<Slider />*/}
                <br/><br/><br/>
                <SideNav />

            </div>
        </div>
    );
    }
}

HomePage.propTypes = {
    //
};

