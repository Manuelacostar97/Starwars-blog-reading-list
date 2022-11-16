import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { CardCharacters } from "../component/CardCharacters";
import { CardPlanets } from "../component/CardPlanets";
import { Loading } from "../component/Loading";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {

	}, [])
	
		return(
			<div className="container my-3 ">
				<h3 className="text-start" style={{color:'red'}}>Characters</h3>
					<div className="overflow-auto">
						<div className="mt-2 d-flex" style={{width:'200%'}}>
							{
								store.characters ? (
									store.characters.map((characters) => {
										return <CardCharacters key={characters.uid} characters={characters}/>
									})
								) : (
									<Loading />
								)
							}
									
						</div>
					</div>
								<h3 className="text-start mt-4" style={{color:'red'}}>Planets</h3>
									<div className="overflow-auto">
										<div className="mt-2 d-flex" style={{width:'200%'}}>
											{
												store.planets ? (
													store.planets.map((planets) => {
														return <CardPlanets key={planets.uid} planets={planets}/>
													})
												) : (
													<Loading />
												)
											}
										</div>
									</div>								
			</div>	
		)
	};
