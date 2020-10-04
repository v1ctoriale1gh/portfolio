import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class About extends Component {

    render() {
        return (
            
            <Container >
                <h2 className="rainbow">☼ About ☼</h2>
                
                <p className="about">Hello and thank you for visiting my portfolio!<br /><br />
                My name is Victoria Leigh and I'm a full-stack software engineer and recent grad of the FlatIron School's full-time software engineering program.<br /><br />
                During my past professional experiences as a counselor and in restaurant management, I discovered my love for solving problems and making new systems.  
                My drive, passion, and desire for challenge led me to change careers to focus on developing, full-time. <br /><br />
                Having completed The Flatiron School's program and built up skills in Ruby, Sinatra, Rails, Javascript, React, and of core CS fundamentals and patterns, I'm now looking for a full-stack position to apply my skills within a team and grow from more experienced developers.<br /><br />
                Reared in Charleston, SC but raised in Atlanta, GA I spend my time developing projects, learning new tech skills, hiking and philosophizing about life with my partner, two dogs, and bearded dragon in The Big Peach and Georgia Foothills.</p><br />
                {this.props.makeLinks("projects")} ☼ {this.props.makeLinks("contact")}
                </Container>
        );
    }
}

export default About;