import React from "react";
import { Link } from "react-router-dom";

export const CardPlanets = (props) => {
    return(
        <div className="card m-2" style={{maxWidth: "250px", maxHeight: ""}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planets.uid}.jpg`} className="card-img-top" alt="..." onError={({currentTarget})=>{
                currentTarget.onerror= null; //evitar looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
            }}/>
            <div className="card-body">
                <h5 className="card-title">{props.planets.name}</h5>
                <p className="card-text">{props.planets.name}.</p>
                <div className="d-flex justify-content-between">
                    <Link to={"planets/"+props.planets.uid}>
                        <button href="#" className="btn btn-primary">Learn More! </button> 
                    </Link>
                    <button href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
                </div>           
            </div>
        </div>

    )
}