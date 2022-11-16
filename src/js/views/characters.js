import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Characters = props => {
		const { store, actions } = useContext(Context);
		const params = useParams();
		const [ character , setCharacter ] = useState ({});
		
	
		async function getCharacter() {
		try {
			const responseCharacter = await fetch(store.API_URL + `/people/${params.theid}`);
			if (!responseCharacter.ok)
				throw new Error(`invalid responsecharacter. Response status: ${responseCharacter.status}`);
			const bodyCharacter = await responseCharacter.json();
			setCharacter(bodyCharacter.result.properties);

		} catch (error) {
			console.log(error);
		}
	}
	
		useEffect(() => {
			getCharacter()
		}, [])
	
		console.log(character)
	
		return (	
			<div className="container">
				<div className="row">
					<div className="col-6 mr-1 mt-2">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}/>
					</div>
					<div className="col-6 text-center">	
						<h1 className="mt-4">{character.name}</h1>
						<p className="mt-2">{store.descipcionCharacter[`${params.theid}`]}</p>
					</div>
				</div>
				<hr className=" my-4 opacity-100" style={{color: "red", height: "2px"}}/>
				<div className="d-flex justify-content-between text-center px-5" style={{color: "red"}}>
					<div>
						<h6 style={{width: "50px"}}>Name </h6><p>{character.name}</p>
					</div>
					<div>
						<h6 style={{width: "50px"}}>Birth Year</h6><p>{character.birth_year}</p>
					</div>
					<div>
						<h6 style={{width: "50px"}}>Gender </h6><p>{character.gender}</p>
					</div>
					<div>
						<h6 style={{width: "50px"}}>Height </h6><p>{character.height}</p>
					</div>
					<div>
						<h6 style={{width: "50px"}}>Skin Color </h6><p>{character.skin_color}</p>
					</div>
					<div>
						<h6 style={{width: "50px"}}>Eye Color</h6><p>{character.eye_color}</p>
					</div>						
				</div>
			</div>	
		);
	};

Characters.propTypes = {
	match: PropTypes.object
};