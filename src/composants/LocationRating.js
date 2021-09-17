import React from 'react';
import Star from './Star';

export default class LocationRating extends React.Component {
    render(){
        return (
            <div className="locationratingcontainer">
                <div className="namepicture">
                    <div className="locationname">{this.props.host.name}</div>
                    <div style={{background:'url("'+(this.props.host.picture)+'")', backgroundSize:"cover"}} className="locationprofil"></div>
                </div>
                <div className="rating">
                  <Star ratings={this.props.ratings}/>
                  
                </div>
            </div>
        )
    }
}
  





