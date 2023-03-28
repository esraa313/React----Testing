import React from 'react'
import { Container , Row } from 'react-bootstrap';
import { Button, Card } from "react-bootstrap";
import img from "./../images/img.jpg"
import img1 from "./../images/img1.jpg"
import img2 from "./../images/img2.webp"
import img3 from "./../images/img3.jpg"
import img4 from "./../images/img4.jpg"
import img5 from "./../images/img5.jfif"
import img6 from "./../images/img6.jfif"
import img7 from "./../images/img7.jpg"

const data = [
  {title : "Title1" , description :"Description1" , image : img1 },
  {title : "Title2" , description :"Description2" , image : img2},
  {title : "Title3" , description :"Description3" ,image : img3},
  {title : "Title4" , description :"Description4" , image : img4},
  {title : "Title5" , description :"Description5" , image :img5 },
  {title : "Title6" , description :"Description6" , image : img6},
  {title : "Title7" , description :"Description7" , image :img7 },
]
const CardDetails = () => {
  return (
    
    
    <Container fluid>
      <Row>
      {
        data.map((item,index) => {
          return <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={item.image} className="h-75"/>
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