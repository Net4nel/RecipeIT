import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import axios from 'axios';

class RecipeListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: '',
            tags:[]
        };
    }
    componentDidMount () {
        if(this.props.recipe.imageData)
            this.getImage(this.props.recipe.imageData);
    }

    getImage (imageData) {
        const data = {path: imageData.path};
        const config = {
            headers: {
                'Authorization': 'Bearer ' + process.env.API_TOKEN,
                'Content-Type': 'application/json'
            }
        };

        axios
            .post('https://api.dropbox.com/2/files/get_temporary_link', data, config)
            .then(res => {
                this.setState(() => { return {image: res.data.link}; });
            })
            .catch(err => {
                console.dir(err);
                console.log(` תקלה בטעינת התמונה עבור המתכון: ${this.props.name}`);
            });
    }


    render () {
        return (
            <Link to={"recipes/" + this.props.recipe._id} className="recipe_list_item">
                <img className="recipe_list_item_img" src={this.state.image} alt={this.props.name} />
                <div className="recipe-name-list">{this.props.recipe.name}</div>

            </Link>
        );
    }
};

RecipeListItem.propTypes = {
    recipe: PropTypes.object
};

export default RecipeListItem;
