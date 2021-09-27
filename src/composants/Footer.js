import React from 'react';
import img from "../images/logoblack.png"
export default class Footer extends React.Component{
    render() {
        return <div className="footer-container"><footer> <img className="footerimg" alt="logo Kasa" src={img}/><div className="footertext">© 2020 Kasa. All rights reserved</div></footer></div>
    }
}