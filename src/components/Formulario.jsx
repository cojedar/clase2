import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [celular, setCelular] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")
    let [contador, setNumero] = useState(0)
    let [mensaje, setMensaje] = useState("")
    let [estado, setEstado] = useState("")

    const listaPersonas = []
    const [personas, setNombres] = useState(listaPersonas)
    
    const procesarFormulario = (e)=>{
        e.preventDefault()

        setEstado('A')

        if(nombre.length < 10){
            setMensaje("El numero de caracteres debe ser minimo 10")
            setEstado("I")
        }    
        if(celular.length === 10){
            setMensaje("El numero de caracteres debe ser 10")
            setEstado("I")
        }    

        if(email.indexOf("@") === -1){
            setMensaje("El correo no es valido")
            setEstado("I")
        }    

        if(estado === "A"){
            setMensaje("Datos validos")
        }

        const persona = [
            {nombre:nombre},
            {celular:celular},
            {email:email},
            {direccion:direccion},
            {ciudad:ciudad},
            {pais:pais}
        ]

        

        contador = contador+=1
        setNumero(contador)
        setNombres([
            ...personas,
                {id: contador, valor: persona}
            ]
        )
        console.log("procesando")

    }

    return (
        <div >
            <h2>Formulario</h2>
            <form onSubmit={procesarFormulario}>
                <input
                    type="text"
                    placeholder="nombre completo"
                    className="form-control mb-2"
                    onChange={(e) => setNombre(e.target.value)} required></input>

                <input
                    type="number"
                    placeholder="celular"
                    className="form-control mb-2"
                    onChange={(e) => setCelular(e.target.value)} required></input>

                <input
                    type="text"
                    placeholder="correo electronico"
                    className="form-control mb-2"
                    onChange={(e) => setEmail(e.target.value)} required></input>    

                <input
                    type="text"
                    placeholder="direccion"
                    className="form-control mb-2"
                    onChange={(e) => setDireccion(e.target.value)} required></input>        

                <input
                    type="text"
                    placeholder="ciudad"
                    className="form-control mb-2"
                    onChange={(e) => setCiudad(e.target.value)} required></input>            

                <input
                    type="text"
                    placeholder="pais"
                    className="form-control mb-2"
                    onChange={(e) => setPais(e.target.value)} required></input>                
    
                <button 
                    type="submit" 
                    className="btn btn-primary mb-2">
                    Agregar cliente</button>
            </form>

            <h2>{mensaje}</h2>

          
        </div>
    )
}

export default Formulario