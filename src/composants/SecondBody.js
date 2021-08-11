
import { useState } from 'react'




function SmallContainer(props){
    const [isOpen, setIsOpen] = useState(true)
  
    
   
    return isOpen ? (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{props.title}</div>
                <i style={{transform: 'rotate(0deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(false)}></i>
            </div>
            <div style={{transform: 'scaleY(0)',height:'0px',display:"none"}} className="description">{props.description}</div>
        </div>
    ): (
        <div className="smallcontainer">
            <div className="titlecontainer">
                <div className="title">{props.title}</div>
                <i style={{transform: 'rotate(180deg)'}}className="fas fa-chevron-down fa-lg" onClick={() => setIsOpen(true)}></i>
            </div>
            <div style={{transform: 'scaleY(1)',height:'auto',display:"block"}}className="description">{props.description}</div>
        </div>
    )


}
function SecondBody(){
   
    return (
        <main className="mainpropos">
            <SmallContainer title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <SmallContainer title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <SmallContainer title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <SmallContainer title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
           
        </main>

    )
    
}
export default SecondBody