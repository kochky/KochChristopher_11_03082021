function LocationRating(props) {
   console.log(props)

    return (
        <div className="locationratingcontainer">
            <div className="namepicture">
                <div className="locationname">{props.host.name}</div>
                <div style={{background:'url("'+(props.host.picture)+'")' }} className="locationprofil"></div>
            </div>
            <div className="rating">
                <div className="starfull"></div>
                <div className="starfull"></div>
                <div className="starfull"></div>
                <div className="starempty"></div>
                <div className="starempty"></div>
            </div>
        </div>
    )
}


//Faire une boucle pour créer les étoiles
export default LocationRating