import { useState } from 'react'

const Voto=()=>{
    const[like,setLike]=useState(0)

    return(
        <div>
            <button>Me gusta</button>
            <button>No me gusta</button>
        </div>
    )
}

export default Voto;