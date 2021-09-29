import React from 'react'
export default class LocationEquipement extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isOpen: false,width: window.innerWidth }; 
      }
    
    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
      };
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    render(){
        const equipments = this.props.equipments
        return  this.state.isOpen?(
            <div className="locationsmallcontainer ">
                <div className="titlecontainer ">
                    <div className="title">Equipements</div>
                    {this.state.width >900 ? (<i style={{transform: 'rotate(180deg)'}}className="fas fa-chevron-down fa-lg"  onClick={() => this.setState({isOpen:false})}></i>):(<i style={{transform: 'rotate(180deg)'}}className="fas fa-chevron-down fa-sm"  onClick={() => this.setState({isOpen:false})}></i>)}
                    </div>
                    <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height"> 
                    <ul>
                        {equipments.map((equipment)=>(<li key={equipment}>{equipment}</li>))}
                      
                    </ul>
                </div>
            </div>
        ):(
            <div className="locationsmallcontainer ">
            <div className="titlecontainer "><div className="title">Equipements</div>
                {this.state.width >900 ? (<i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg"  onClick={() => this.setState({isOpen:true})}></i>):(<i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-sm"  onClick={() => this.setState({isOpen:true})}></i>)}
            </div>
            <div style={{transform: 'scaleY(0)',height:'0'}} className="description small height">    
                        <ul>
                        {equipments.map((equipment)=>(<li key={equipment}>{equipment}</li>))}
                      
                    </ul>
                
            </div>
        </div>
    
        )

    }
}