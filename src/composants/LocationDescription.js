import { useState, useEffect } from 'react'


function LocationDescription(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? (
        <div id="descriptionlocation" className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(false)}></i></div>
            <div style={{transform: 'scaleY(0)',height:'0'}}className="description small height">Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </div>
        </div>
    ):(
        <div id="descriptionlocation" className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Description</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(true)}></i></div>
            <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height">Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </div>
        </div>

    )
}

export default LocationDescription