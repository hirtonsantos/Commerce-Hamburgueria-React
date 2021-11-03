import "./style.css"

function Product ({handleClick, name, price, category, id, img, showProducts}){
    return (
        <div className="product-card">
        <img src={img} alt="foto"/>
        <div className="details-product">
        <p className="name-product"> {name} </p>
        <p className="category-product"> {category}</p>
        <p className="price-product"> R$ {price.toFixed(2)} </p>
        <button onClick={() => handleClick(id)}>Adicionar</button>
        </div>
        </div>
    )
}

export default Product