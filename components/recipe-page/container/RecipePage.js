import React, {PropTypes, Component} from "react";
import axios from "axios";

const URL = 'http://localhost:3000/api';

import RegularView from '../display/RegularView';
import KitchenView from './KitchenView';

export default class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kitchenView: false,
            recipe: {},
            image: ''
        }

        this.onStateViewClick = this.onStateViewClick.bind(this);
    }

    componentWillMount(){
        let id = this.props.routeParams.id;
        axios
            .get(`${URL}/recipes/${id}`)
            .then((response) => {
                if(response.statusText == "OK") {
                    this.setState({recipe: response.data.recipes});
                    if(response.data.recipes.imageData)
                        this.getImage(response.data.recipes.imageData);
                }
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
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
                this.setState({image: res.data.link});
            })
            .catch(err => {
                console.dir(err);
                console.log(`Wops, something went wrong while fetching image for ${this.props.name}`);
            });
    }

    onStateViewClick() {
        this.setState({kitchenView: !this.state.kitchenView});
    }

    render() {
        let textValues = {
            loading: 'טוען...'
        }
        if(_.isEmpty(this.state.recipe)) return <div>{textValues.loading}</div>;

        let RecipeComponent = this.state.kitchenView ? KitchenView : RegularView;
        return <RecipeComponent recipe={this.state.recipe} image={this.state.image} onStateViewClick={this.onStateViewClick} />;
    }
}
