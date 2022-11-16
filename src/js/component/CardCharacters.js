import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacters = (props) => {
    const { store, actions } = useContext(Context);
    const setFav= actions.setFav

    return(
        <div className="card m-2" style={{maxWidth: "250px", maxHeight: ""}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.characters.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.characters.name}</h5>
                <p className="card-text">{props.characters.name}.</p>
                <div className="d-flex justify-content-between">
                    <Link to={"characters/"+props.characters.uid} >
                        <button href="#" className="btn btn-primary">Learn More!</button>
                    </Link>
                    <button href="#" className="btn btn-outline-warning" onClick={(e)=>{setFav(props.characters.name, props.characters.uid)}}><i className="far fa-heart"></i></button>
                </div>           
            </div>
        </div>

    )
}