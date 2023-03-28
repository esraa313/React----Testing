import React from 'react'
import { Container , Row } from 'react-bootstrap';
import { Button, Card } from "react-bootstrap"

const data = [
  {title : "Title1" , description :"Description1"},
  {title : "Title2" , description :"Description2"},
  {title : "Title3" , description :"Description3"},
  {title : "Title4" , description :"Description4"},
  {title : "Title5" , description :"Description5"},
  {title : "Title6" , description :"Description6"},
  {title : "Title7" , description :"Description7"},
]
const CardDetails = () => {
  return (
    
    
    <Container fluid>
      <Row>
      {
        data.map((item) => {
          return <Card style={{ width: '18rem' }} className="col-lg-4">
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        })
      }
     </Row>
    </Container>
  )
}

export default CardDetails 