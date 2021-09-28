import React from 'react';
import AboutBanner from '../composants/AboutBanner';
import AboutBody from '../composants/AboutBody'

export default class Propos extends React.Component{
    render(){
        return (
            <React.Fragment>
                <AboutBanner/>
                <AboutBody/>
            </React.Fragment>
        )
    }
}

