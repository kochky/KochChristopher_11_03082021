import { useState } from 'react'


function LocationBanner(props){
    const [coverImg, setCoverImg] = useState(props.cover[0])
    const indexImg = props.cover.indexOf(coverImg)
    const numberOfImg= props.cover.length -1

     
    return props.cover.length >1 ?(
        <div style={{background:'no-repeat url("'+(coverImg)+'")'}}  className="locationbanner">
               <i onClick={() => {indexImg === 0  ? setCoverImg(props.cover[numberOfImg]) : setCoverImg(props.cover[indexImg -1])}} className="fas fa-chevron-left fa-5x left-arrow"></i>
                <i  onClick={() => {indexImg === numberOfImg  ? setCoverImg(props.cover[0]) : setCoverImg(props.cover[indexImg +1])}} className="fas fa-chevron-right fa-5x right-arrow"></i>
        </div>
        
    ):(<div style={{background:'no-repeat url("'+(coverImg)+'")'}}  className="locationbanner"></div>)
    
}

export default LocationBanner