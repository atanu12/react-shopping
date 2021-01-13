import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './components/BuyPage';

function App() {

  const [cartItem, setCartItem] = useState( [])

  const addInCart = item =>{

    const isAlradyAdd = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlradyAdd !== -1){
      toast(`Alrady added in the cart`,{
        type:'error'
      })
    }

    setCartItem([...cartItem, item])
  }

  const buy = () =>{
    setCartItem( [] )

    toast(`Thank for the Purchase`, {
      type: 'success'
    })
  }

  const removeItem = item =>{

    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id ))
  }


  return (
    <div className="App">
     <BuyPage addInCart={addInCart}/>
    </div>
  );
}

export default App;
