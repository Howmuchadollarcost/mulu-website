import React from 'react';
import { Navbar, Container, Row, Col} from 'react-bootstrap';


export default function index() {
    return (
        <div className="headerContainer">
            <div style={{height: "10rem"}}></div>
            <Navbar expand="lg" sticky="top" >
             <Container fluid>
                 <img src="../logo.png" alt="Mulu logo" className="logo" />
             </Container>
            </Navbar>

            <header>
                <Container fluid className="h-100">
                    <Row className="h-100">
                        <Col sm={12} xl={6} className="my-auto">
                            <div className="bio mt-5">
                                <h4 className="mb-2" style={{color:"#718096", fontWeight:"400", fontSize:"1.5rem"}}>Hey! My name is</h4>
                                <div className="mb-5">
                                    <h1 className="mb-0" style={{color:"#3F3F3F",fontWeight:"600", fontSize:"2.5em"}}>Muluberhan Yonas</h1>
                                    <h5 style={{color:"#7311f2", fontWeight:"400"}}>@muluberg</h5>
                                </div>

                                <div className="bio-about mb-5">
                                    <p className="mb-3" style={{fontSize:"1.1em"}}> 
                                        I am a 25 year old Norway based fullstack developer with 2 years of professional experience. 
                                    </p>
                                </div>

                                <a href="#portfolio">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>

                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}
