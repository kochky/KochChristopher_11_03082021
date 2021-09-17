import React from 'react';
import SecondBanner from '../composants/SecondBanner';
import SecondBody from '../composants/SecondBody'
import Footer from '../composants/Footer'

export default class Propos extends React.Component{
    render(){
        return (
            <React.Fragment>
                <SecondBanner/>
                <SecondBody/>
                <Footer/>
            </React.Fragment>
        )
    }
}

