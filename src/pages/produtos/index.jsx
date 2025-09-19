import axios from "axios"

const Produto = () => {
    //consumo de um endpoint com as pizzas
    axios.get("http://172.19.0.49/pizzariateste/api/v1/index")
    .then(response=>{
        console.log(responde.data)
    })

    // Objeto com a lista de pizzas
     //Interação da lista de pizzas
     const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                <li>Pizza de Muçarela</li>
                <li>Pizza de Calabresa</li>
                <li>Pizza de Portuguesa</li>
                <li>Pizza de Baiana</li>
            </ul>
        </div>
    )
}

export default Produto