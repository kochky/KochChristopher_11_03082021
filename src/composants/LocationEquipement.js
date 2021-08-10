import { useState, useEffect } from 'react'



function LocationEquipement(){
    const [isOpen, setIsOpen] = useState(true)
    return  isOpen?(
        <div className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(false)}></i></div>
            <div style={{transform: 'scaleY(0)',height:'0'}} className="description small height">   
                <ul>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                </ul>
            </div>
        </div>
    ):(
        <div className="locationsmallcontainer ">
        <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(true)}></i></div>
        <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height">   
            <ul>
                <li>Climatisation</li>
                <li>Wi-Fi</li>
                <li>Cuisine</li>
                <li>Espace de travail</li>
                <li>Fer à repasser</li>
                <li>Sèche-cheveux</li>
                <li>Cintres</li>
            </ul>
        </div>
    </div>

    )
}

export default LocationEquipement