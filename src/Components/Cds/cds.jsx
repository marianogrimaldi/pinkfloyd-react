import "./cds.scss"

const CdsList = ( {items} ) => {
    return(
            <div className="sectionGrid">
                {items.map((cd) => (
                    <div  key={cd.id}>
                        
                        <img src={cd.img}/>
                        <div className="detail">
                        <h3 className="nombreCd">{cd.nombre}</h3>
                        <h4 className="añoCd">{cd.año}</h4>
                    </div>
            </div>
        ))}
        </div>
    )
    
}

export default CdsList