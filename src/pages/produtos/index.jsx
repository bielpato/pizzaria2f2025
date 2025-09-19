const Produto = () => {
    // Objeto com a lista de pizzas
    const pizzas = [
        'Pizza de muçarela',
        'Pizza de Caabresa',
        'Pizza de Baiana'
     ]
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