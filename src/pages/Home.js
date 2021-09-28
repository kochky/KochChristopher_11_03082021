
import Banner from '../composants/Banner';
import Main from '../composants/Main';
import React from 'react';


export default class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Banner />
                <Main />            
            </React.Fragment>
        )
    }
}
