import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Row,
    Col
} from 'reactstrap'

const Carts =( {cartItem, buy,removeItem} )=> {

    let amount = 0;
    cartItem.forEach(item =>{
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })
    return (
        <Container>
            <h1 className="text-success"> Your Cart </h1>
            <ListGroup>
                {cartItem.map( item=>(
                    <ListGroupItem key={item.id} >
                        <Row>
                            <Col>
                                <img height={80} src={item.tinyImage} />
                            </Col>
                            <Col className='text-center' >
                                <div className="text-primary"> {item.productname} </div>
                                <span> Price :- {item.productPrice} </span>
                                <Button color='danger' onClick={ ()=> removeItem(item) } >Remove</Button>
                            </Col>

                        </Row>
                    </ListGroupItem>
                    
                ) )}
            </ListGroup>
            {/* if the cart is emptyCells:*/ }
            {
                cartItem.length>=1 ? (
                    <Card className="text-center mt-3">
                        <CardHeder >
                            Toatal 
                        </CardHeder>
                        <CardBody>
                            Your Amount for {cartItem.length} product is {amount} 
                        </CardBody>
                        <CardFooter>
                            <Button color='success' onClick={buy} >Pay Here</Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning"> Cart is Empty </h1>
                )
            }

        </Container>
        
    )
}

export default Carts
