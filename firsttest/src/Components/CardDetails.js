import React from 'react'
import { Container , Row } from 'react-bootstrap';

import { Button, Card } from "react-bootstrap"


const CardDetails = () => {
  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }} className="col-lg-3">
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }} className="col-lg-3">
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>  

        <Card style={{ width: '18rem' }} className="col-lg-3">
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default CardDetails 