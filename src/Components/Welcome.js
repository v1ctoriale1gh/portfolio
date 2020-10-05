import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        return (
            <div className="center">
                <h1 className="welcome-header">Welcome</h1><br />
                To Victoria Leigh's Portfolio<br />
                {this.props.makeLinks("about")} ☼ {this.props.makeLinks("projects")} ☼ {this.props.makeLinks("contact")}
            </div>
        );
    }
}

export default Welcome;