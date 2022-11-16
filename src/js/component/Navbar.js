import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/StarWarsLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favorites = store.favorites
	const setNewFav= actions.setNewFav
	console.log(favorites)
	
	const FavsList = favorites.map((fav, i) => {
		return (
			<div key={i}>
				<Link to={`/${fav.type}/${fav.uid}`} className="px-2 py-1 text-decoration-none text-wawa fw-bold">{fav.name}</Link>
				<button type="button"
				className="btn-close btn-close-dark float-end px-2"
				onClick={(event) => deleteFav(i)}></button>
			</div>
			)
	})

	function deleteFav (i) {
		const newList = favorites.filter((item, index)=> {
			if (i == index) { 
				return false
			}
			return true
		})
		setNewFavorites(newList)
	}
	
	return (
		
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<img src={StarWarsLogo} />
					</Link>
					<div className="ml-auto">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites  ({favorites.length})
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{
							favorites.length > 0 ? (
								FavsList
							) : (
								<li className="px-2 fst-italic text-muted">You have not added any favorites</li>
							)
						}
							</ul>
						</div>
					</div>
				</div>	
			</nav>	
	);
};
