import React from "react";

export const Loading = (props) => {
    return(
        <div className="d-flex justify-content-center text-danger">
			<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
			</div>
        </div>
    )
}