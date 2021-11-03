import { useState } from 'react';
import Product from './Product';
import MenuContainer from './MenuContainer';
import CardProducts from './CardProducts/Index';
import './App.css';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'McShake Ovomaltine', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [currentSale, setCurrentSale] = useState([])
  const [userinput, setUserinput] = useState("")


  function handleClick(productId){
      const add =  products.find((item) => item.id === productId);
      setCurrentSale([...currentSale, add])
  }

  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior
  }, 0)

  function showProducts (){
    setProducts(products.filter((item) => {
      return item.category===userinput
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer userinput={userinput} setUserinput={setUserinput} products={products} handleClick={handleClick} showProducts={showProducts}/>
        <CardProducts currentSale={currentSale}/>
      </header>
    </div>
  );
}

export default App;
