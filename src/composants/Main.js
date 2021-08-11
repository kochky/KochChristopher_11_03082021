import LogementList from "../logement"
import { Link } from 'react-router-dom'



function Main(){


    return (
        <main className="mainhome">
            {LogementList().map((logement) => (
              <Link to={(logement.id)} style={{
                  backgroundImage:'url("'+(logement.cover)+'")'
                }} 
                key={logement.id} id={(logement.id)} className='card'> <div>{logement.title}</div></Link>
            ))}
         

        </main>
    )
}
export default Main