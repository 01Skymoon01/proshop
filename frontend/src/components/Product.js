import React from 'react';
import {Card,Button} from "react-bootstrap";
import Rating from "./rating";

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
                <a href={`/Product/${product._id}`}>
                    <Card.Img src={product.image} variant='top'/>
                </a>
            <Card.Body>

                <Card.Title as="div"> <strong>{product.name}</strong></Card.Title>
                    <Card.Text as="div">
                        <Rating value={product.rating}  text={`${product.numReviews} reviews`} />
                    </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>

            </Card.Body>
        </Card>
    );
};

export default Product;