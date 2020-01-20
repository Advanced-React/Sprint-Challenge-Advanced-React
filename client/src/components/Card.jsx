import React from 'react';
import './Card.css'

export const Card = props => {
	console.log(props.players);
	return (
		<div>
			{props.players.map(player => {
				return (
					console.log(player),
					(
						<div className='Card'>
							<p>Name: {player.name}</p>
							<p>Country: {player.country}</p>
							<p>Searches:{player.searches}</p>
							<p>ID: {player.id}</p>
						</div>
					)
				);
			})}
		</div>
	);
};
