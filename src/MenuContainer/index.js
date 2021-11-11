import "./style.css"
import { useState } from "react"
import Product from "../Product"
import CardProducts from "../CardProducts/Index"

function MenuContainer ({currentSale, setProducts,setCurrentSale,remove,totalPrice, products, handleClick, showProducts , setUserinput, userinput}){

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
                <button onClick={() => showProducts(userinput)} id="button-buscar"> Buscar </button>
            </div>
        </header>
        <section className="mae">  
            <section> 
                {products.map((item, index) => (
                <Product key={index} showProducts={showProducts}  handleClick={handleClick} id={item.id} name={item.name} price={item.price} category={item.category} img={item.img}/>
            ))}
            </section>
            <CardProducts currentSale={currentSale} setCurrentSale={setCurrentSale} remove={remove} totalPrice={totalPrice} />
        </section>
        </div>
    )
}

export default MenuContainer