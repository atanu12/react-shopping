import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
} from "reactstrap";

const CardItems = ({ product, addInCart }) => {
  return (
    <Container>
      <Card className="mt-2 mb-1">
        <CardImg top height="250" width="100px" src={product.smallImage} />
        <CardBody className="text-center">
          <CardTitle> {product.productName} </CardTitle>
          <CardText className="error">
            Price : Rs {product.productPrice}
          </CardText>
          <Button className="warning border-0 " style={{outline: 'none'}} onClick={() => addInCart(product)}>
            Buy Now
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CardItems;
