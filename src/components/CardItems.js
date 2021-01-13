import React from 'react'
import {
    Card, CardImg,CardText,CardBody,CardTitle, Button
} from 'reactstrap'

const CardItems =({product, addInCart} )=> {
    return (
      <Card className='mt-2 mb-1' >
        
            <CardImg top height='250' width='100%' src={product.smallImage} />
            <CardBody className='text-center' >
                <CardTitle> {product.productName} </CardTitle>
                <CardText className="error" >
                    Price : Rs {product.productPrice}
                </CardText>
                <Button className='warning' onClick={ ()=> addInCart(product) } >Buy Now</Button>
            </CardBody>

      </Card>
    )
}

export default CardItems
