import React, {Component} from "react";
import axios from "axios";
import Form from "../display/RecipeSearch";
import Recipe from '../display/Recipe';

const URL = 'http://localhost:3000/api';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempIngredient: '',
            ingredients: [],
            recipes: []
        };

        this.onChange = this.onChange.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.removeByName = this.removeByName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.generateRecipes = this.generateRecipes.bind(this);
    }

    /**
     * @method onSubmit
     * @description performs a query to the API with the values of this.state.ingredients
     * and stores the recipes found on this.state.recipes
     * @param {object} event object
     */
    onSubmit(e) {
        e.preventDefault();
        if (!this.state.ingredients.length) return alert('Please add ingredients');

        const query = `?ingredients=${this.state.ingredients.toString()}`;

        axios.get(`${URL}/recipes${query}`)
            .then(res => {
                this.setState(() => {
                    return {recipes: res.data.recipes};
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChange(e) {
        let input = e.target;
        let name = input.getAttribute('name');
        switch (name) {

            case 'tempIngredient':
                this.setState({
                    tempIngredient: input.value
                });
                break;

        }
    }

    removeByName(name,i) {
        let tempArray;
        switch (name) {

            case 'ingredients':
                tempArray = [...this.state.ingredients];
                tempArray.splice(i,1);
                this.setState({
                    ingredients: tempArray
                });
                break;

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

    render() {
        let {ingredients} = this.state;
        return (
            <div className="recipe-wrapper container">
                <Form

                    ingredients={ingredients}

                    tempIngredient={this.state.tempIngredient}
                    addIngredient={this.addIngredients}
                    onChange={this.onChange}
                    title={this.state.title}
                    removeByName={this.removeByName}
                    submitHandler={this.onSubmit}
                />
                <ul className="container">
                    {this.generateRecipes(this.state.recipes)}
                </ul>
            </div>
        );
    }
    generateRecipes(recipes) {
        if (!recipes || !recipes.length) return null;

        return recipes.map(recipe => {
            return (
                <Recipe key={recipe._id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    properties={recipe.properties}
                    steps={recipe.steps}
                    tags={recipe.tags} 
                    imageData={recipe.imageData} /> 
            );
        });
    }
}

SearchPage.propTypes = {
    //
};

