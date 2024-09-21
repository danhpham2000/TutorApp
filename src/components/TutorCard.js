import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from '../../node_modules/react-bootstrap/esm/CardGroup';

function TutorCard() {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card><Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default TutorCard;