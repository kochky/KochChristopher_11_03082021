import LogementList from "../logement"
import { Link } from 'react-router-dom'
import React from "react"

export default class Main extends React.Component{

    render(){
        return (
            <main className="mainhome">
                {LogementList().map((logement) => (
                  <Link to={`/location/${logement.id}`} 
                  style={{
                      backgroundImage:'url("'+(logement.cover)+'")'
                    }} 
                    key={logement.id} id={(logement.id)} className='card'> <div>{logement.title}</div></Link>
                ))}
            </main>
        )
    }
}
