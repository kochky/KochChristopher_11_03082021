import React from 'react';

function LocationRating(props) {
    return (
        <div className="locationratingcontainer">
            <div className="namepicture">
                <div className="locationname">{props.host.name}</div>
                <div style={{background:'url("'+(props.host.picture)+'")' }} className="locationprofil"></div>
            </div>
            <div className="rating">
              <Star ratings={props.ratings}/>
              
            </div>
        </div>
    )
}

function Star (props){
    const ratings = props.ratings
    console.log(ratings)

    return (
        <div className="rating">
      
            {(() => {
      
               switch (ratings) {
                  case '0':
                      return (
                        <React.Fragment>
                        <div className="starempty"></div>
                        <div className="starempty"></div>
                        <div className="starempty"></div>
                        <div className="starempty"></div>
                        <div className="starempty"></div>
                        </React.Fragment>                       
                      )
                      case '1':
                        return (
                          <React.Fragment>
                          <div className="starfull"></div>
                          <div className="starempty"></div>
                          <div className="starempty"></div>
                          <div className="starempty"></div>
                          <div className="starempty"></div>
                          </React.Fragment>                       
                        )
                        case '2':
                            return (
                              <React.Fragment>
                              <div className="starfull"></div>
                              <div className="starfull"></div>
                              <div className="starempty"></div>
                              <div className="starempty"></div>
                              <div className="starempty"></div>
                              </React.Fragment>                       
                            )
                            case '3':
                                return (
                                  <React.Fragment>
                                  <div className="starfull"></div>
                                  <div className="starfull"></div>
                                  <div className="starfull"></div>
                                  <div className="starempty"></div>
                                  <div className="starempty"></div>
                                  </React.Fragment>                       
                                )
                                case '4':
                                    return (
                                      <React.Fragment>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starempty"></div>
                                      </React.Fragment>                       
                                    )
                                    case '5':
                                    return (
                                      <React.Fragment>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      <div className="starfull"></div>
                                      </React.Fragment>                       
                                    )
               }
      
            })()}
      
        </div>
      );

}
//Faire une boucle pour créer les étoiles
export default LocationRating