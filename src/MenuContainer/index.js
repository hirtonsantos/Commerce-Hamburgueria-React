import { useState } from "react"
import Product from "../Product"

function MenuContainer ({products, handleClick, showProducts , setUserinput, userinput}){
    return (
        <div>
        <div>
            <button onClick={showProducts}> LIXO
            </button>
            <input
            type="text"
            value={userinput}
            onChange={(event) => setUserinput(event.target.value)}
        />
        </div>
            {products.map((item, index) => (
            <Product key={index} showProducts={showProducts}  handleClick={handleClick} id={item.id} name={item.name} price={item.price} category={item.category} img={item.img}/>
          ))}
        </div>
    )
}

export default MenuContainer