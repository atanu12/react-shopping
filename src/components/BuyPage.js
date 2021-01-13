import Axios from 'axios'
import { commerce, random } from 'faker'
import React, {useEffect, useState}  from 'react'
import {Container, Row,Col} from 'reactstrap'
import CardItems from './CardItems'

const APIKEY= '563492ad6f9170000100000174411b292a244983afd9dbb63b248c28'
const URL = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const BuyPage =( {addInCart})=> {

    const [product, steProduct] = useState( [] )

    const fetchPhotos = async () =>{
        const {data} = await Axios.get(URL, {
            headers:{
                Authorization: APIKEY
            }
        })
        

        const {photos} = data

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }) )

        steProduct(allProducts)

       
    }
    useEffect(() => {
        fetchPhotos()  
    }, [])
    return (
        <div>
        <Container fluid>

        <h1 className='text-success text-center'>
         buy Page
        </h1>

        <Row>
            {product.map(product =>(
               <Col md={4} key={product.id}>
                <CardItems product={product} addInCart={addInCart} /> 
               </Col>
            ))}
        </Row>
        </Container>
            
        </div>
    )
}

export default BuyPage
