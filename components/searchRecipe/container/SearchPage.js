import React, {Component} from "react";
import axios from "axios";
import Form from "../display/RecipeSearch";

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempIngredient: '',
            ingredients: []

        };

        this.onChange = this.onChange.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.removeByName = this.removeByName.bind(this);

    }

    /**
     * @TODO: finish submit function, add validations.
     */
    onSubmit() {
        let url = '/recipe';

        let valid = true;

        let level = this.steps.length;

        let data = {
            title : this.state.title,
            keyWords: this.state.keyWords ,
            level: level
        };
        if (valid) {
            axios.post(url, {data:data}).then((response)=>{
                console.log(response + 'added new recipe');
            })
        }
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
                />
            </div>
        );
    }
}

SearchPage.propTypes = {
    //
};

