import CuadroMensaje from "./CuadroMensaje";

const Fondo =(props)=>{  
    return(
        <div style={props.estilo}>
            <CuadroMensaje mensaje={props.mensaje}/>
        </div>
    )
}

export default Fondo;