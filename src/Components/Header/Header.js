import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import img from '../../images/img (2).jpg'
import '../Header/Header.css'
import Nav from '../Nav/Nav';


const Header = () => {
    return (
       <>
        <div className="header">
            <Nav></Nav>
           <div className="header-banner">
           <Container>
           <Row>
                    <Col className="d-flex align-items-center justify-content-center container">
                        <div className="header-text">
                        <h3>We are the Best Digital Business Today</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                         ea iusto alias officia sed ab possimus non earum voluptas aperiam.</p>
                        <Button variant="contained" color="secondary">Find Out More</Button>
                        </div>
                    </Col>
                    <Col>
                        <img src= {img} alt="hero" className="img-fluid w-100"/>
                    </Col>
                </Row>
               </Container>  
               </div>        
        </div>
       </>
    );
};

export default Header;