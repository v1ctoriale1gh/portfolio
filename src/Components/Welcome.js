import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome">
                <h1 className="h1-less-padding">Welcome</h1><br />
                {this.props.makeLinks("about")} ☼ {this.props.makeLinks("projects")} ☼ {this.props.makeLinks("contact")}
            </div>
        );
    }
}

export default Welcome;