import React, {PropTypes} from "react";
import _ from 'lodash';
//Components:
import Header from "./common/Header";
import Footer from "./common/Footer";


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="root">
                <Header />
                <div id="view" className="page-wrap">
                    {this.props.children}
                </div>
                {/*<Footer />*/}
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired
};

export default App;
