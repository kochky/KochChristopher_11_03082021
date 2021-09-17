import React from "react"

export default class LocationTag extends React.Component{
    render(){
        const tags= this.props.tags
        return (
            <div className="tagcontainer">
                {tags.map((tag)=>( <div  key={tag} className="locationtag">{tag}</div>))}
        </div>
        )
    }
}

