
function LocationTag(props){
    const tags= props.tags
    return (
        <div className="tagcontainer">
            {tags.map((tag)=>( <div  key={tag} className="locationtag">{tag}</div>))}
   
    </div>
    )
}

export default LocationTag