import React, {Component} from "react";

import SideNav from "../display/SideNav";
import Slider from "../display/Slider";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <Slider />
                <br/><br/><br/>
                <SideNav />

            </div>
        );
    }
}

HomePage.propTypes = {
    //
};

