import React from 'react'
export default class LocationEquipement extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isOpen: false }; 
      }

    render(){
        const equipments = this.props.equipments
        return  this.state.isOpen?(
            <div className="locationsmallcontainer ">
                <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(180deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => this.setState({isOpen:false})}></i></div>
                <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height"> 
                    <ul>
                        {equipments.map((equipment)=>(<li key={equipment}>{equipment}</li>))}
                      
                    </ul>
                </div>
            </div>
        ):(
            <div className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg"onClick={() => this.setState({isOpen:true})}></i></div>
            <div style={{transform: 'scaleY(0)',height:'0'}} className="description small height">    
                        <ul>
                        {equipments.map((equipment)=>(<li key={equipment}>{equipment}</li>))}
                      
                    </ul>
                
            </div>
        </div>
    
        )

    }
}