import React, { Component } from 'react'

export class SheepCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number: 0
        };       
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <>
                <h1>Number: {this.state.number} </h1>
                <button
                    onClick={this.handleClick}
                >Increment
                </button>
                <img src="logo.svg" alt="oveja"/>
            </>
        )
    }
}

export default SheepCounter
