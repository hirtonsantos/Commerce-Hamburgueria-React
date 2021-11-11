import "./style.css"


function CardProducts ({currentSale, setCurrentSale, remove, totalPrice}) {

    function removeItem (itemRemove){
        setCurrentSale(currentSale.filter((item) => {
          return item.id!==itemRemove
        }))
    }


    return currentSale.length !== 0 ? (
        <div className="carrinho">
            <div className="header-carrinho"> <p> Carrinho de compras </p> </div>
        {currentSale.map((item, index) => (
            <span>
                <div className="imagem-span"> 
                    <img src={item.img} alt="foto"/>
                </div>
                <div className="details-span"> 
                    <div className="informations-products"> 
                        <p key={index} className="name-span"> {item.name} </p>
                        <p key={index} className="category-span"> {item.category} </p>
                    </div>
                    <p onClick={() => removeItem(item.id)} id="coco" key={index}>Remove</p>
                </div>
                </span>
          ))}
          <span className="span-inferior">
            <div className="valor-total">  
                <p> Total: </p>
                <p className="total-price"> R$ {totalPrice.toFixed(2)} </p>
            </div>
          <button onClick={remove}> Remover todos </button>
          </span>
        </div>
    ) : (
        <div className="carrinho">
            <div className="header-carrinho"> <p> Carrinho de compras </p> </div>
            <div className="itens-adicionados">
                <p className="sacola-vazia"> Sua sacola está vazia </p>
                <p className="pedido-para-adicionar-itens"> Adicione itens </p>
            </div>
        </div>
    )
}

export default CardProducts;