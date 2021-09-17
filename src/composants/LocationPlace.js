import React from "react"

export default class LocationPlace extends React.Component{
   
    render(){
        const location= this.props.location
        return (
            <div className="locationplace">{location}</div>
            )
    }
}