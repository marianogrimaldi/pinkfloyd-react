import "./cds.scss"


const EstructuraCds = ({nombre, año}) => {
   return (
        <section>
            <div className="divCard">
                
                <h3 className="nombreCd">{nombre}</h3>
                <h4 className="añoCd">{año}</h4>
                
            </div>
            
        </section>


    )
}

export default EstructuraCds