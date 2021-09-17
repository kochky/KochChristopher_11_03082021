import React from 'react';
import { render } from "@testing-library/react"
import img from "../images/logoblack.png"
export default class Footer extends React.Component{
    render() {
        return <footer> <img className="footerimg" alt="logo Kasa" src={img}/><div className="footertext">© 2020 Kasa. All rights reserved</div></footer>
    }
}