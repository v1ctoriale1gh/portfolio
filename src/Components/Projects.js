import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Projects extends Component {
    render() {
        return (
            
            <Container>
                <h2 className="rainbow-header">☼ Projects ☼</h2>
                {this.props.makeLinks("contact")} ☼ {this.props.makeLinks("about")}
                <Container>
                <Col>
                <Row className="justify-content-md-center" style={{
                    paddingTop: '1rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                    <h3>Figly</h3>
                </Row>
                <Row className="justify-content-md-center" style={{
                    paddingBottom: '2rem',
                    paddingLeft: '4.25em',
                    paddingRight: '4em'
                }}>
                <iframe width="200" height="112" src="https://www.youtube.com/watch?v=CJSPdGluy1o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Figly" allowFullScreen></iframe>
                </Row>
                <Row className="justify-content-md-center">
                    <p><a target="_blank" rel="noopener noreferrer" href="http://victorial.sgedu.site/">Visit the Site</a></p>
                    <p className="small-text">Figly is a mock business site for a skincare and beauty brick and mortar shop built using wordpress</p>
                </Row>
                </Col>
                <Col>
                <Row className="justify-content-md-center" style={{
                    paddingTop: '1rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                    <h3>Emotion Logger</h3>
                </Row>
                <Row className="justify-content-md-center" style={{
                    paddingBottom: '2rem',
                    paddingLeft: '4.25em',
                    paddingRight: '4em'
                }}>
                <iframe width="200" height="112" src="https://www.youtube.com/embed/oUoi5d6JS0Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Emotion-Logger" allowFullScreen></iframe>
                </Row>
                <Row className="justify-content-md-center">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh/emotion-tracker-front-end">Front End on Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh/emotion-tracker-back-end">Back End on Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://emotion-logger-front-end.herokuapp.com/">Visit the App</a></p>
                    <p className="small-text">Emotion Logger is a React app for users to track their emotional state over time.
                    This project focuses on incorporating Redux, using stateless and container components, and integrating the React Google Charts API.  This project uses a Ruby on Rails back-end API with a Postgres Server to persist data, and is hosted on Heroku.</p>
                </Row>
                </Col>
                <Col>
                <Row className="justify-content-md-center" style={{
                    paddingTop: '1rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                    <h3>Paddlers Only</h3>
                </Row>
                <Row className="justify-content-md-center" style={{
                    paddingBottom: '2rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                <iframe width="200" height="112" src="https://www.youtube.com/embed/IXQ-Y7d9a-U" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Paddlers-Only" allowFullScreen></iframe>
                </Row>
                <Row className="justify-content-md-center">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh/paddlers-only-front-end">Front End on Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh/paddlers-only-back-end">Back End on Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://paddlers-only.herokuapp.com/">Visit the App</a></p>
                    <p className="small-text">Paddlers Only is an event board for Paddlers to Post meetups that will be happening in their area.  The focus of this project was using Vanilla Javascript to create a single page application with a Ruby on Rails API backend, and making Ajax calls and HTTP requests.  This app uses a Postgres server and is hosted on Heroku.</p>
                </Row>
                </Col>
                <Col>
                <Row className="justify-content-md-center" style={{
                    paddingTop: '1rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                    <h3>Forage Tracker</h3>
                </Row>
                <Row className="justify-content-md-center" style={{
                    paddingBottom: '2rem',
                    paddingLeft: '4em',
                    paddingRight: '4em'
                }}>
                <iframe width="200" height="112" src="https://www.youtube.com/embed/gycrF-LFzJA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Forage-Tracker" allowFullScreen></iframe>
                </Row>
                <Row className="justify-content-md-center" style={{
                    paddingBottom: '2rem'
                }}>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/v1ctoriale1gh/forage-tracker">Code on Github</a> ☼ <a target="_blank" rel="noopener noreferrer" href="https://forage-tracker.herokuapp.com/">Visit the App</a></p>
                    <p className="small-text">Forage Tracker is an app for Foragers to track, date, and geocode their foraging finds in foraging logs.
                    This is a back-end ROR project and focuses heavily on MVC architecture, RESTFUL architecture, using form builder form_with and form_for, nested forms and routes, using DRY code with helper methods and partials, using Active Record as an ORM, has many through relationships, scope methods with SQL, incorporating Postgres, and is hosted on Heroku.</p>
                </Row>
                </Col>
                </Container>
                </Container>
        );
    }
}

export default Projects;