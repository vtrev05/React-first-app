import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date()
        };
        setInterval(this.updateClock, 1000)
        this.updateClock = this.updateClock.bind(this);
      }

    updateClock() {
        console.log(new Date('June 25, 2021 10:08:00'))
    }

    render() {
        return (
            <div
            style={{width: 500, height: 500, backgroundColor: 'green'
            }} 
            onClick={this.updateClock}> 
            </div>
        )
    }
}

export default Clock
