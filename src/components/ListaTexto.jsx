import React, {useState} from 'react'

const Listas = () => {

    let [contador, setNumero] = useState(5)
    const lista = [
        {id: 1, valor:"Carlos"},
        {id: 2, valor:"Pedro"},
        {id: 3, valor:"Maria"},
        {id: 4, valor:"Andres"}
    ]

    const [nombres, setNombre] = useState(lista)

    const agregarNombre = () =>{
        contador = contador+=1
        setNumero(contador)
        setNombre([
            ...nombres,
            {id: contador, valor: "Martha"}
        ]
        )
    }

    return(
        <div>
          <h2>Lista</h2>
          { 
            nombres.map( (item, id) =>(
                <h3 key={item.id}>{item.valor}</h3>
            ))    
          }
          <button onClick={()=>agregarNombre()}>Enviar</button>
        </div>  
    )
}

export default Listas