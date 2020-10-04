import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Contact extends Component {
    render() {
        return (
            
            <Container className="center">
                <h1 className="rainbow-header">☼ Contact ☼</h1>                
                <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/victoriale1gh/">Connect with me on LinkedIn</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh">Peruse my Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="mailto:victoria@victorialeigh.tech">Send me an Email</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/v1ctoriale1gh">Stalk my Twitter</a></p>
                {this.props.makeLinks("projects")} ☼ {this.props.makeLinks("about")}
                </Container>
        );
    }
}

export default Contact;