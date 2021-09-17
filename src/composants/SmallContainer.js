import React from 'react'

export default class SmallContainer extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = { isOpen: true };
      }
    
   render(){
    return this.state.isOpen ? (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{this.props.title}</div>
                <i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => this.setState({isOpen:false})}></i>
            </div>
            <div style={{transform: 'scaleY(0)',height:'0px',display:"none"}} className="description">{this.props.description}</div>
        </div>
    ): (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{this.props.title}</div>
                <i style={{transform: 'rotate(180deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => this.setState({isOpen:true})}></i>
            </div>
            <div style={{transform: 'scaleY(1)',height:'auto',display:"block"}}className="description">{this.props.description}</div>
        </div>
    )

   }
    

}