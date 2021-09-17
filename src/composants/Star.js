import React from 'react';

export default class Star extends React.Component{
   

    render(){
        const ratings = this.props.ratings
    
        return (
            <div className="rating">
        
                {(() => {
        
                switch (ratings) {
                    case '0':
                        return (
                            <React.Fragment>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            </React.Fragment>                       
                        )
                        case '1':
                        return (
                            <React.Fragment>
                            <div className="starfull"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            <div className="starempty"></div>
                            </React.Fragment>                       
                        )
                        case '2':
                            return (
                                <React.Fragment>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starempty"></div>
                                <div className="starempty"></div>
                                <div className="starempty"></div>
                                </React.Fragment>                       
                            )
                        case '3':
                            return (
                                <React.Fragment>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starempty"></div>
                                <div className="starempty"></div>
                                </React.Fragment>                       
                            )
                        case '4':
                            return (
                                <React.Fragment>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starfull"></div>
                                <div className="starempty"></div>
                                </React.Fragment>                       
                            )
                        default:
                        return (
                            <React.Fragment>
                            <div className="starfull"></div>
                            <div className="starfull"></div>
                            <div className="starfull"></div>
                            <div className="starfull"></div>
                            <div className="starfull"></div>
                            </React.Fragment>                       
                        )
                }
        
                })()}
        
            </div>
        );
    }
}