import { useState, useEffect } from 'react'



function LocationEquipement(props){
   const equipments = props.equipments
    const [isOpen, setIsOpen] = useState(true)
    return  isOpen?(
        <div className="locationsmallcontainer ">
            <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(false)}></i></div>
            <div style={{transform: 'scaleY(0)',height:'0'}} className="description small height">   
                <ul>
                    {equipments.map((equipment)=>(<li>{equipment}</li>))}
                  
                </ul>
            </div>
        </div>
    ):(
        <div className="locationsmallcontainer ">
        <div className="titlecontainer small"><div className="title">Equipements</div><i style={{transform: 'rotate(0deg)'}}class="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(true)}></i></div>
        <div style={{transform: 'scaleY(1)',height:'auto'}} className="description small height">   
            <ul>
            <ul>
                    {equipments.map((equipment)=>(<li>{equipment}</li>))}
                  
                </ul>
            </ul>
        </div>
    </div>

    )
}

export default LocationEquipement