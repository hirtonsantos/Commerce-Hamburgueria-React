import { useState } from 'react';
// import Product from './Product';
import MenuContainer from './MenuContainer';
// import CardProducts from './CardProducts/Index';
import './App.css';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png', cont:1 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png', cont:1 },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png', cont:1 },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png', cont:1 },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png', cont:1},
    { id: 6, name: 'McShake...', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png', cont:1},
  ]);

  const [testezin, setTestezin] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png', cont:1 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png', cont:1 },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png', cont:1 },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png', cont:1 },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png', cont:1},
    { id: 6, name: 'McShake...', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png', cont:1},
  ]);

  const [currentSale, setCurrentSale] = useState([])
  const [userinput, setUserinput] = useState("")

  function handleClick(productId){
      const add =  products.find((item) => item.id === productId);
      setCurrentSale([...currentSale, add])
      if (add.cont === 1){
        add.cont +=1
      }
  }

  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior
  }, 0)

  function showProducts (parametro){
    setProducts(testezin)
    if(userinput === "Bebidas" || parametro === "Bebidas"){
      setProducts(products.filter((item) => {
        return item.category==="Bebidas"
      }))
    } else if (userinput === "Sanduíches" || parametro === "Sanduíches"){
        console.log(products, "2")
        setProducts(products.filter((item) => {
        return item.category==="Sanduíches"
      }))
    } else {
      setProducts(testezin)
    }
  }

  function remove (){
    setCurrentSale([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer setProducts={setProducts}  currentSale={currentSale} setCurrentSale={setCurrentSale} remove={remove} totalPrice={totalPrice} userinput={userinput} setUserinput={setUserinput} products={products} handleClick={handleClick} showProducts={showProducts}/>
      </header>
    </div>
  );
}

export default App;
