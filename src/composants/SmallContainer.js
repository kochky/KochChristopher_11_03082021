import React from 'react'

export default class SmallContainer extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = { isOpen: false, class:'' };
      }
      updateDimensions = () => {
          if(window.innerWidth<900){
        this.setState({ class:'fas fa-chevron-down fa-sm'});}
        else { this.setState({class:"fas fa-chevron-down fa-lg"})}
        console.log(this.state.class)
      };

      componentDidMount() {
        if(window.innerWidth<900){
            this.setState({ class:'fas fa-chevron-down fa-sm'});}
            else { this.setState({class:"fas fa-chevron-down fa-lg"})}
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    
   render(){
    return this.state.isOpen ? (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{this.props.title}</div>
                <i style={{transform: 'rotate(180deg)'}}className={this.state.class} onClick={() => this.setState({isOpen:false})}></i>
            </div>
            <div style={{transform: 'scaleY(1)',height:'auto',display:"block"}}className="description">{this.props.description}</div>

        </div>
    ): (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{this.props.title}</div>
                <i style={{transform: 'rotate(0deg)'}}className={this.state.class} onClick={() => this.setState({isOpen:true})}></i>
            </div>
            <div style={{transform: 'scaleY(0)',height:'0px',display:"none"}} className="description">{this.props.description}</div>
        </div>
    )

   }
    

}