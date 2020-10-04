import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
  import ProjectCarousel  from './ProjectCarousel'

class Projects extends Component {
    render() {
        return (
            
            <Container>
                <h2 className="rainbow-header">☼ Projects ☼</h2>
                <Container>
                <Col>
                <Row className="justify-content-md-center" style={{
                    padding: '2rem'
                }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oUoi5d6JS0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                </Col>
                </Container>
                {this.props.makeLinks("contact")} ☼ {this.props.makeLinks("about")}
                </Container>
        );
    }
}

export default Projects;