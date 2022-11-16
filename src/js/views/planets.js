import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [ planet , setPlanet ] = useState ({});
	

	const getPlanet = async () => {
		try{
			const responsePlanet = await fetch(store.API_URL+`/planets/${params.theid}`)
			if (!responsePlanet.ok) throw new Error (`invalid responsePlanet. Response status: ${responsePlanet.status}`)
			const bodyPlanet = await responsePlanet.json()
			setPlanet( bodyPlanet.result.properties )
			
		}catch(error){
			console.log(error)
		}
	}

	useEffect(() => {
		getPlanet()
	}, [])

	console.log(planet)

	return (	
		<div className="container">
			<div className="row">
				<div className="col-6 mr-1 mt-2">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}/>
				</div>
				<div className="col-6 text-center">	
					<h1 className="mt-4">{planet.name}</h1>
					<p className="mt-2">{store.descipcionPlanet[`${params.theid}`]}</p>
				</div>
			</div>
			<hr className=" my-4 opacity-100" style={{color: "red", height: "2px"}}/>
			<div className="d-flex justify-content-between text-center px-5" style={{color: "red"}}>
				<div>
					<h6 style={{width: "50px"}}>Name {planet.name}</h6><p>{planet.name}</p>
				</div>
				<div>
					<h6 style={{width: "50px"}}>Climate</h6><p>{planet.climate}</p>
				</div>
				<div>
					<h6 style={{width: "50px"}}>Population </h6><p>{planet.population}</p>
				</div>
				<div>
					<h6 style={{width: "50px"}}>Orbital Period </h6><p>{planet.orbital_period}</p>
				</div>
				<div>
					<h6 style={{width: "50px"}}>Rotation Period </h6><p>{planet.rotation_period}</p>
				</div>
				<div>
					<h6 style={{width: "50px"}}>Diameter</h6><p>{planet.diameter}</p>
				</div>						
			</div>
		</div>	
	);
};

Planets.propTypes = {
	match: PropTypes.object
};