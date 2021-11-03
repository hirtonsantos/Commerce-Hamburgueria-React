// import { useState }

function Product ({handleClick, name, price, category, id, img, showProducts}){
    return (
        <div>
        <p> Categoria do produto: {category}</p>
        <p> Nome do produto: {name} </p>
        <p> Preço do produto: {price} </p>
        <img src={img}/>
        <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Product