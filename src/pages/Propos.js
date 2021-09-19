import React from 'react';
import AboutBanner from '../composants/AboutBanner';
import AboutBody from '../composants/AboutBody'
import Footer from '../composants/Footer'

export default class Propos extends React.Component{
    render(){
        return (
            <React.Fragment>
                <AboutBanner/>
                <AboutBody/>
                <Footer/>
            </React.Fragment>
        )
    }
}

