import React, {useState} from 'react'

const Listas = () => {

    const lista = ["uno","dos","tres","cuatro","cinco"]

    const [listaNumeros, setListaNumeros] = useState(lista)

    return(
        <div>
          <h2>Lista</h2>
          { 
            listaNumeros.map( (item, index) =>(
                <h3 key={index}>{item}</h3>
            ))    
          }
        </div>  
    )
}

export default Listas