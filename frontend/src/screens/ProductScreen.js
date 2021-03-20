import React, {useEffect, useState} from 'react';
import products from "../products";
import {Link} from "react-router-dom";
import { Row, Col,Image,ListGroup,Card,Button } from "react-bootstrap";
import Rating from "../components/rating";
import axios from "axios";

const ProductScreen = ({match}) => {


    const [product,setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = () => {
           setProduct(products.find(p => p._id === match.params.id))
        }

        // const fetchProduct2 = async () => {
        //     const { data } = await axios.get(`/products/${match.params.id}`);
        //     console.log(match.params)
        //     setProduct(data);
        // }

        fetchProduct()

        // fetchProduct2()

    },[match])

    return (
        <>
            <Link to={`/`} className={`btn btn-light my-3`}>
            Go Back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3> {product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <strong>{product.price}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Status: {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            Price: <strong>{product.price}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Status: {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                className='btn-block'
                                type='button'
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default ProductScreen;