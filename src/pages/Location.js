import LocationBanner from '../composants/LocationBanner'
import LocationTitle from '../composants/LocationTitle'
import LocationPlace from '../composants/LocationPlace'
import LocationTag from '../composants/LocationTag'
import LocationDescription from '../composants/LocationDescription'
import LocationEquipement from '../composants/LocationEquipement'
import LocationRating from '../composants/LocationRating'
import Footer from '../composants/Footer'
import React from 'react';
import {
    useParams
  } from "react-router-dom";

function Location() {
    let { id } = useParams();
    console.log(id)
return (
    <React.Fragment>
        <div className="locationcontainer">
            <LocationBanner />
            <div className="locationsecondcontainer">
                <div>
                    <LocationTitle/>
                    <LocationPlace/>
                    <LocationTag/>
                </div>

                    <LocationRating/>
            </div>
            <div className="bottomcontainer">
                <LocationDescription/>
                <LocationEquipement/>
            </div>   



        </div>
        <Footer />
    </React.Fragment>


)


}
export default Location