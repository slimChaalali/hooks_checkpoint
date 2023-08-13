import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css'
const MovieCard = ({ moviees }) => {
  return (
    <Card style={{ width: '18rem' }} className='carde'>
      <Card.Img variant="top" src={moviees.img} />
      <Card.Body>
        <Card.Title>{moviees.title}</Card.Title>
        <Card.Text>
          {moviees.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='rate'>Rate: {moviees.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard