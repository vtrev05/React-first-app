import React, { Component } from 'react'

export class Red extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color: 'blue'
        };
    
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState((prevState) => ({
            color: prevState.color === 'blue' ? 'red' : 'blue'
          })); 
      }

    render() {
        return (
            <div
            style={{width: 500, height: 500, backgroundColor: this.state.color
            }} 
            onClick={this.handleClick}>
            </div>
        )
    }
}

export default Red
