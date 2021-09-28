import LogementList from "../logement"
import { Link } from 'react-router-dom'
import React from "react"

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data:false };
      }
    componentDidMount() {
        this.setState({data: LogementList().map((logement) => (
            <Link to={`/location/${logement.id}`} 
            style={{backgroundImage:'url("'+(logement.cover)+'")'}} 
                key={logement.id} id={(logement.id)} className='card'> <div>{logement.title}</div></Link>
            ))})
        }

    render(){
        return(
            <main className="mainhome"> 
                {this.state.data ===false?(<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
                :this.state.data}
            </main> )
        
        }
}
