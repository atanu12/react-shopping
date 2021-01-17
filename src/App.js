import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import {ToastContainer ,toast } from 'react-toastify';
import {Container, Row, Col} from 'reactstrap'
import BuyPage from './components/BuyPage';
import Carts from './components/Carts';

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
      return
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
   <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md={4}>
          <Carts cartItem={cartItem} buy={buy} removeItem={removeItem}  />
        </Col>
      </Row>
   </Container>
  );
}

export default App;
