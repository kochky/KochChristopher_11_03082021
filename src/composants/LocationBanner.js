import React from 'react';

export default class LocationBanner extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { coverImg: this.props.cover[0] };
       
      }
  
    render (){
        const indexImg = this.props.cover.indexOf(this.state.coverImg)
        const numberOfImg= this.props.cover.length -1

        return this.props.cover.length >1 ?(
            <div style={{background:'center no-repeat  url("'+(this.state.coverImg)+'")'}}  className="locationbanner">
                   <i onClick={() => {indexImg === 0  ? this.setState({coverImg :this.props.cover[numberOfImg]}) : this.setState({coverImg:this.props.cover[indexImg -1]})}} className="fas fa-chevron-left fa-5x left-arrow"></i>
                    <i  onClick={() => {indexImg === numberOfImg  ? this.setState({coverImg:this.props.cover[0]}) :this.setState({coverImg:this.props.cover[indexImg +1]})}} className="fas fa-chevron-right fa-5x right-arrow"></i>
            </div>
            
        ):(<div style={{background:'no-repeat url("'+(this.state.coverImg)+'")'}}  className="locationbanner"></div>)
        
    }
}