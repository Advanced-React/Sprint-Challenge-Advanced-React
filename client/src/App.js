import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Card} from './components/Card'

class App extends Component {
	constructor () {
		super();
		this.state = {
			players : [],
		};
	}
	componentDidMount () {
		console.log('cDM');
		axios.get('http://localhost:5000/api/players').then(
			res => (
				console.log(res.data),
				this.setState({
					players : res.data,
				})
			),
		);
	}

	render () {
		console.log(this.state);
		return (
			<div className='App'>
        <Card players={this.state.players}/>
			</div>
		);
	}
}
export default App;
