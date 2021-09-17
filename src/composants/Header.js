import React from 'react';
import img from "../images/LOGO.png"
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render(){
        return  (
            <div className="Header">
                <img alt="logo Kasa" src={img}/>
                <nav>
                    <Link to="/" className="link-navbar" >Accueil</Link>
                    <Link to="/propos" className="link-navbar" >A Propos</Link>
                </nav>
            </div>
        )
    }
}