import React, { Component } from 'react';

class Welcome extends Component {

    handleClick = () => {
        this.props.history.push('/home')
    }

    handleMouseEnter = (event) => {
        console.log("HELLLO")
        event.target.className = "hovered-text"

    }

    handleMouseLeave = (event) => {
        event.target.className= "nothing"

    }

    render() {
        return (
            <div className="welcome">
                <h1 className="h1-less-padding">Welcome</h1><br />
                <p>Click <span className="nothing" onClick={this.handleClick} onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>☼ here ☼</span> to enter</p>
            </div>
        );
    }
}

export default Welcome;