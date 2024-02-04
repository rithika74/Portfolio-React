import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

const Work = (props) => {
  return (
    <>

      <section id='work'>

        <div >
          <Container>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{ width: '24rem', height: '24rem', border: '2px solid rgb(80, 26, 88)', margin: '20px' }} className='card'>
                    <Card.Img variant="top" src={props.imgSrc} style={{ height: '15rem' }} />
                    <Card.Body>
                      <Card.Title className='text-light mb-4'>{props.title}</Card.Title>
                      <Button style={{ backgroundColor: 'rgb(80, 26, 88)', border: 'none' }}>
                        <a href={props.link} style={{ color: 'white', textDecoration: 'none', backgroundColor: 'rgb(80, 26, 88)', padding: '5px' }}><FontAwesomeIcon icon={faGithub} style={{ borderRadius: '50%', marginRight:'10px'}} />{props.buttonText}</a>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>



    </>
  )
}

export default Work