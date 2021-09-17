import React from 'react'
export default class LocationDescription extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isOpen: true };
      }
    render() {
        const description= this.props.description
        return this.state.isOpen? (
            <div id="descriptionlocation" className="locationsmallcontainer ">
                <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => this.setState({isOpen:false})}></i></div>
                <div style={{transform: 'scaleY(0)',height:'0'}}className="description small height">{description}</div>
            </div>
        ):(
            <div id="descriptionlocation" className="locationsmallcontainer ">
                <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => this.setState({isOpen:true})}></i></div>
                <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height">{description} </div>
            </div>
    
        )

    }
}