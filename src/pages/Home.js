
import Banner from '../composants/Banner';
import Main from '../composants/Main';
import React from 'react';
import Footer from '../composants/Footer'


export default class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Banner />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}
