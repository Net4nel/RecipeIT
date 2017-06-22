import React, {Component, PropTypes} from 'react';
import axios from 'axios';

class Recipe extends Component {
	constructor (props) {
		super(props);

		this.state = {
			image: ''
		};
	}
	componentDidMount () {
		this.getImage(this.props.imageData);
	}
	render () {
		return (
			<li className="col-xs-4">
				<div>
					<a href={this.state.image}>
						<img src={this.state.image} alt={this.props.name} />
					</a>
					<h3>{this.props.name}</h3>
					<div>
						<h4>Ingredients: </h4>
						<ul>
							{this.generateList(this.props.ingredients)}
						</ul>
					</div>
					<div>
						<h4>Properties: </h4>
						<ul>
							{this.generateList(this.props.properties)}
						</ul>
					</div>
					<div>
						<h4>Steps: </h4>
						<ul>
							{this.generateList(this.props.steps)}
						</ul>
					</div>
					<div>
						<h4>Tags: </h4>
						<ul>
							{this.generateList(this.props.tags)}
						</ul>
					</div>
				</div>
			</li>
		);
	}
	generateList (array) {
		if (!array || !array.length) return null;

		return array.map((elem, i) => {
			return (
				<li key={i}>{elem}</li>
			);
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
				this.setState(() => { return {image: res.data.link}; });
			})
			.catch(err => {
				console.dir(err);
				console.log(`Wops, something went wrong while fetching image for ${this.props.name}`);
			});
	}
}

Recipe.propTypes = {
	name: PropTypes.string.isRequired,
	ingredients: PropTypes.array,
	properties: PropTypes.array,
	steps: PropTypes.array,
	tags: PropTypes.array,
	imageData: PropTypes.object
};

export default Recipe;