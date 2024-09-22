import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from '../../node_modules/react-bootstrap/esm/CardGroup';

function TutorCard() {
  return (
    // <CardGroup style={{ margin: '0 10em', padding: "10px"}}>
    //   <Card>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //     </Card.Body>
    //   </Card>
    //   <Card>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //     </Card.Body>
    //   </Card><Card>
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>

    // We used Grid Cards from group
    <Row xs={1} md={3} className="g-4" style={{margin: "0 5em"}}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{width: "350px"}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TutorCard;