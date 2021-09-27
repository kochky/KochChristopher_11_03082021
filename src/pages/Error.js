import { Link } from "react-router-dom"
import React from 'react';
export default class ErrorPage  extends React.Component  {
    render(){
        return ( 
            <div className="errorcontainer">
                <div className="errortitle">404</div>
                <div className="erroroups">Oups! La page que vous demandez n'existe pas.</div>
                <Link className="errorlink" to="/">Retourner sur la page d'accueil</Link>
            </div>
        )

    }
}