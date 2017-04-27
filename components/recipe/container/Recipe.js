import React, {Component} from "react";
import Form from "../display/RecipeForm";

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tempIngredient: '',
            tempStep: '',
            tempKeyword: '',
            steps: [],
            ingredients: [],
            keyWords: []
        };

        this.onChange = this.onChange.bind(this);
        this.addKeyWord = this.addKeyWord.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.addStep = this.addStep.bind(this);
    }

    onChange(e) {
        debugger;
        let input = e.target;
        let name = input.getAttribute('name');
        switch (name) {
            case 'title':
                this.setState({
                    title: input.value
                });
                break;
            case 'tempIngredient':
                this.setState({
                    tempIngredient: input.value
                });
                break;
            case 'tempStep':
                this.setState({
                    tempStep: input.value
                });
                break;
            case 'tempKeyWord':
                this.setState({
                    tempKeyword: input.value
                });
                break;
        }
    }

    addKeyWord() {
        let keywords = this.state.keyWords;
        let keyword = this.state.tempKeyword;
        if (!~keywords.indexOf(keyword)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                keyWords: [...this.state.keyWords, keyword],
                tempKeyword: ''
            })
        }
    }

    addIngredients() {
        let ingredients = this.state.ingredients;
        let ingredient = this.state.tempIngredient;
        if (!~ingredients.indexOf(ingredient)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                ingredients: [...this.state.ingredients, ingredient],
                tempIngredient: ''
            })
        }
    }

    addStep() {
        let steps = this.state.steps;
        let step = this.state.tempStep;
        if (!~steps.indexOf(step)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                steps: [...this.state.steps, step],
                tempStep: ''
            })
        }
    }


    render() {
        let { steps, ingredients, keyWords} = this.state;
        return (
            <div className="recipe-wrapper container">
                <Form
                    steps={steps}
                    ingredients={ingredients}
                    keyWords={keyWords}
                    tempStep={this.state.tempStep}
                    tempIngredient={this.state.tempIngredient}
                    tempKeyWord={this.state.tempKeyword}
                    addKeyWord={this.addKeyWord}
                    addIngredient={this.addIngredients}
                    addStep={this.addStep}
                    onChange={this.onChange}
                    title={this.state.title}
                />
            </div>
        );
    }
}

Recipe.propTypes = {
    //
};

