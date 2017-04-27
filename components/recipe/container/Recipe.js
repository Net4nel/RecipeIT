import React, {Component} from "react";
import Form from "../display/RecipeForm";

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            ingredients: [],
            keyWords: []
        }
    }

    addKeyWord(keyword) {
        let keywords = this.state.keyWords;
        if (!~keywords.indexOf(keyword)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                keyWords: [...this.state.keyWords, keyword]
            })
        }
    }

    addIngredients(ingredient) {
        let ingredients = this.state.ingredients;
        if (!~ingredients.indexOf(ingredient)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                ingredients: [...this.state.ingredients, ingredient]
            })
        }
    }

    addStep(step) {
        let steps = this.state.steps;
        if (!~steps.indexOf(step)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                steps: [...this.state.steps, step]
            })
        }
    }


    render() {
        let { steps, ingredients, keyWords} = this.state;
        return (
            <div className="recipe-wrapper container">
                <Form steps={steps} ingredients={ingredients} keyWords={keyWords}/>
            </div>
        );
    }
}

Recipe.propTypes = {
    //
};

