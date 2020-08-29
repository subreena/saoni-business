import React from 'react';
import { Container, Row, Col , Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import '../Contact/Contact.css';

const Contact = () => {
    return (
        <>
        <div className="contact">
           <Container>
           <Row>
                    <Col className="d-flex align-items-center justify-content-center container">
                        <div className="contact-text">
                            <h5>Contact</h5>
                        <h3>Let's Get in touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                         ea iusto alias officia sed ab possimus non earum voluptas aperiam.</p>
                        
                        </div>
                    </Col>
                    <Col>
                        <div className="form">
                        <Form>
                        <Form.Group controlId="formBasicPassword">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="contained" color="secondary">Submit</Button>
</Form>
                        </div>
                    </Col>
                </Row>
               </Container>  
               </div>        
     
        </>
    );
};

export default Contact;