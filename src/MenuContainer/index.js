import "./style.css"
import Product from "../Product"

function MenuContainer ({products, handleClick, showProducts , setUserinput, userinput}){
    return (
        <div>
        <header className="pesquisa">
            <div className="title"> 
                <h1> Burguer </h1>
                <h3> Kenzie </h3>
            </div>

            <div className="barra-de-pesquisa"> 
                <input
                type="text"
                value={userinput}
                onChange={(event) => setUserinput(event.target.value)}
                />
                <button onClick={showProducts} id="button-buscar"> Buscar </button>
            </div>
        </header>
        <section> 
            {products.map((item, index) => (
            <Product key={index} showProducts={showProducts}  handleClick={handleClick} id={item.id} name={item.name} price={item.price} category={item.category} img={item.img}/>
          ))}
        </section>
        </div>
    )
}

export default MenuContainer