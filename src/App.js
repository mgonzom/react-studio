import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    setCartItems([...cartItems,item])
  }

  function calculateTotal(){
    
    let total = 0
    for(let i=0; i<cartItems.length; i++){
      total+=cartItems[i].price
    }
    return total;
  }


  return (
    <div className="App">
      <h1 className="header">Blueno's Bakery @2022</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="bakery-container">
           {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
           <p><BakeryItem item = {item} addToCart = {addToCart} /></p>
           ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.map((item,index) => (<p>{item.name}</p>))}
        <h1 className="Total">Total:{calculateTotal()}</h1>
        {/* TODO: render a list of items in the cart */}
      </div>

    </div>
  );
}

export default App;
