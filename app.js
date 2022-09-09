import React from "react"
import Header from "./header.js"
import Components from "./components.js"
import data from "./data.js"

export default function App() {
    
    const main_components = data.map(item => {
        return <Components 
                key = {item.id}
                title = {item.title}
                location = {item.location}
                url = {item.googlemapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
        />
    }) 
    return (
        <div>
            <Header />
            {main_components}
        </div>
    )
    
}