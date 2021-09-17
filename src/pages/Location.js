import LocationBanner from '../composants/LocationBanner'
import LocationTitle from '../composants/LocationTitle'
import LocationPlace from '../composants/LocationPlace'
import LocationTag from '../composants/LocationTag'
import LocationDescription from '../composants/LocationDescription'
import LocationEquipement from '../composants/LocationEquipement'
import LocationRating from '../composants/LocationRating'
import Footer from '../composants/Footer'
import React from 'react';
import LogementList from "../logement"
import { withRouter } from "react-router";

class Location extends React.Component{

    render(){
        const id = this.props.match.params.id;
        const logement= LogementList().find(x=>x.id === id)
        return (
            <React.Fragment>
                <div className="locationcontainer">
                    <LocationBanner cover={logement.pictures} />
                    <div className="locationsecondcontainer">
                        <div>
                            <LocationTitle title={logement.title}/>
                            <LocationPlace location={logement.location}/>
                            <LocationTag tags={logement.tags}/>
                        </div>
                            <LocationRating ratings={logement.rating} host={logement.host}/>
                    </div>
                    <div className="bottomcontainer">
                        <LocationDescription description={logement.description}/>
                        <LocationEquipement  equipments={logement.equipments}/>
                    </div>   
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withRouter(Location)