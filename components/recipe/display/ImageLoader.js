import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class ImageLoader extends Component {
	constructor() {
		super();

		this.state = {
			accepted: []
		};
		this.submitImage = this.submitImage.bind(this);
	}
	render() {
		return (
			<section className="dropzone2">
				<div className="dropzone">
					<Dropzone
						accept="image/jpeg, image/png"
						onDrop={(accepted) => { this.setState({ accepted }); }}
					>
						{this.generateMessageOrImage(this.state.accepted)}
					</Dropzone>
				</div>
				<button onClick={this.submitImage}>העלה</button>
			</section>
		);
	}
	generateMessageOrImage(acceptedFiles) {
		if (!acceptedFiles.length) {
			return (
				<div className="img-dropzone-text">
					<p>העלה תמונה</p>
					<p>לחץ כאן או גרור תמונה</p>
					<p> </p>
					<p> </p>
					<p>JPEG / PNG</p>
					<p>בלבד</p>
				</div>
			);
		}

		return (
			<img style={{ maxWidth: '100%' }} src={this.state.accepted[0].preview} alt="uploaded image" />
		);
	}

	submitImage(e) {
		e.preventDefault();
		if (!this.props.name) return alert('Please insert a recipe name first');

		const file = this.state.accepted[0];
		const extension = file.name.match(/\.(jpg)|\.(png)|\.(jpeg)/, 'g')[0];
		// const fileName = this.props.name + extension;
        const fileName = '1' + extension;

		const config = {
			headers: { 
				'Authorization': 'Bearer ' + process.env.API_TOKEN,
				'Content-Type': 'application/octet-stream',
				'Dropbox-API-Arg': `{"path": "/${fileName}","mode": "add","autorename": true,"mute": false}`
			}
		};


		axios
			.post('https://content.dropboxapi.com/2/files/upload', this.state.accepted[0], config)
			.then(res => {
				const imageData = {
					path: res.data.path_display,
					rev: res.data.rev
				};
				return this.props.addImageData(imageData);
			})
			.catch(err => {
				console.dir(err);
				alert('מצטערים, הייתה בעיה בהעלאה, בבקשה נסה שוב');
			});


	}
}

export default ImageLoader;