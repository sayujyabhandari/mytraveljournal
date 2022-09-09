import React from "react"

export default function Components(props) {
    return (
        <div className="components">
            <img src={`${props.imageUrl}`} className="component-image" />
             <div className="component-main">  
                <div className="first-line">
                    <img src = "./location-icon.png" className="location-icon"/>
                    <p> {props.location.toUpperCase()} </p>
                    <a href={`${props.url}`}> <u>View on Google Maps </u></a>
                </div>
                
                <p className="title-name"> {props.title} </p>
                <p className="dates"> {props.startDate} - {props.endDate}  </p>
                <p className="description"> {props.description} </p>
             </div>
        </div>
    )
}