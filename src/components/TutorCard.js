import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from '../../node_modules/react-bootstrap/esm/CardGroup';

const TutorCard = ({ titles }) => {
  return (
    <Row xs={1} md={3} className="g-4" style={{margin: "0 5em"}}>
      {titles.map((title, idx) => (
        <Col key={idx}>
          <Card style={{width: "350px"}}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TutorCard;