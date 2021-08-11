import { useState } from 'react'


function LocationDescription(props){
    const description= props.description
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? (
        <div id="descriptionlocation" className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(false)}></i></div>
            <div style={{transform: 'scaleY(0)',height:'0'}}className="description small height">{description}</div>
        </div>
    ):(
        <div id="descriptionlocation" className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(true)}></i></div>
            <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height">{description} </div>
        </div>

    )
}

export default LocationDescription