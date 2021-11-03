function CardProducts ({currentSale}) {
    return (
        <div>
        {currentSale.map((item, index) => (
            <span>
            <p key={index}> Categoria do produto: {item.category}</p>
            <p key={index}> Nome do produto: {item.name} </p>
            <p key={index}> Preço do produto: {item.price} </p>
            <img src={item.img}/>
            </span>
          ))}
        </div>
    )
}

export default CardProducts;