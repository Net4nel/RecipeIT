import React, {PropTypes} from "react";
//Components:
import Header from "./common/Header";



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header />
                <div id="view">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired
};

export default App;
