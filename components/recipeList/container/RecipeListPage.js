import React, {PropTypes, Component} from "react";

import RecipeList from '../display/RecipeList';
import axios from "axios";

const URL = 'http://localhost:3000/api';


export default class RecipeListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }

    componentWillMount(){
        axios
            .get(`${URL}/recipes`)
            .then((response) => {
                this.setState({
                    recipes: response.data.recipes
                })
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div className="recipe_list_page">
                <RecipeList recipes={this.state.recipes} />
            </div>
        );
    }
}

RecipeListPage.propTypes = {
    //
};

