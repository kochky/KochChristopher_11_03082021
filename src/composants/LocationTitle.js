import React from "react"

export default class LocationTitle extends React.Component {

    render(){
        const title= this.props.title
        return (
        <div className="locationtitle">{title}</div>
        )
    }
}  


