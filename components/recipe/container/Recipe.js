import React, {Component} from "react";
import axios from "axios";
import Form from "../display/RecipeForm";
import {hasEmptyValues} from '../../../lib/helpers';

const URL = 'http://localhost:3000/api';

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
            keyWords: [],
            properties: [],
            imageData: {}
        };

        this.onChange = this.onChange.bind(this);
        this.addKeyWord = this.addKeyWord.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.addStep = this.addStep.bind(this);
        this.removeByName = this.removeByName.bind(this);
        this.highlightString = this.highlightString.bind(this);
        this.propertiesHandler = this.propertiesHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addImageData = this.addImageData.bind(this);
    }

    /**
     * @method onSubmit
     * @description takes title, keyWords, steps, ingredients and properties. Checks if any value is empty and then
     * post it to the DB
     * @param {Object} event object
     */
    onSubmit(e) {
        e.preventDefault();

        const newRecipe = JSON.stringify({
            name : this.state.title,
            tags: this.state.keyWords,
            steps: this.state.steps,
            ingredients: this.state.ingredients,
            properties: this.state.properties,
            imageData: this.state.imageData
        });

        if (hasEmptyValues(newRecipe)) return alert('Please fill all fields');

        axios
            .post(`${URL}/recipes`, {newRecipe: newRecipe})
            .then(() => {
                console.log('Recipe created!');
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChange(e) {
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

    removeByName(name,i) {
        let tempArray;
        switch (name) {
            case 'steps':
                tempArray = [...this.state.steps];
                tempArray.splice(i,1);
                this.setState({
                    steps: tempArray
                });
                break;
            case 'ingredients':
                tempArray = [...this.state.ingredients];
                tempArray.splice(i,1);
                this.setState({
                    ingredients: tempArray
                });
                break;
            case 'keywords':
                tempArray = [...this.state.keyWords];
                tempArray.splice(i,1);
                this.setState({
                    keyWords: tempArray
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
        // highlightString(step, steps, Blue);
        if (!~steps.indexOf(step)) { // ~ indexOf returns true if exists false if not.
            this.setState({
                steps: [...this.state.steps, step],
                tempStep: ''
            })
        }
    }

    highlightString(_str,_words,color) {
        _words.forEach((word)=>{
            let regex = RegExp(word,'gi');
            _str = _str.replace(regex,'<span style="color:'+color+'">'+word+'</span>')
        });

        return _str;
    }

    propertiesHandler(e) {
        const {value, checked} = e.target;

        if (checked) {
            return this.setState(({properties}) => {
                const newProperties = properties.concat(value);
                return {properties: newProperties};
            });
        }

        return this.setState(({properties}) => {
            const newProperties = properties.filter(property => property !== value);
            return {properties: newProperties};
        });
    }
    addImageData(imageData) {
        this.setState(() => {return {imageData: imageData}});
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
                    removeByName={this.removeByName}
                    highlightString={this.highlightString} ////
                    propertiesHandler={this.propertiesHandler}
                    imageData={this.state.imageData}
                    addImageData={this.addImageData}
                    submitHandler={this.onSubmit}

                />
            </div>
        );
    }
}

Recipe.propTypes = {
    //
};

