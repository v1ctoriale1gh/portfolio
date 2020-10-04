import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Projects extends Component {
    render() {
        return (
            
            <Container >
                <h2 className="rainbow">☼ Projects ☼</h2>
                
                <p>Projects</p>
                {this.props.makeLinks("contact")} ☼ {this.props.makeLinks("about")}
                </Container>
        );
    }
}

export default Projects;