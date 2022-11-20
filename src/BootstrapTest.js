import {Container, Row, Col, Carousel} from 'react-bootstrap';

const BootstrapTest = (props) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    {props.left}
                    
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSR4Cpu6bJCTK6-7ffqpAS-kojHGxKMiJPw&usqp=CAU"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tlbVuW8BxVoJ6ZZD5e6c_6nLl5lhGlAmRw&usqp=CAU"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVhTi7LCNc4oFk_cGP1K3LxILItddSfjxJA&usqp=CAU"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default BootstrapTest;