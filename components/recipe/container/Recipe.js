import React, {Component} from "react";

import ModalNewRecipe from "../../recipe/display/ModalNewRecipe";

export default class Recipe extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <ModalNewRecipe />
            </div>
        );
    }
}

Recipe.propTypes = {
    //
};

