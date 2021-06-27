import React, { Component } from 'react'

export class PopularFruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
            newFruit: ''
          };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    handleChange(ev) {
        const inputValue = ev.target.value
        this.setState({
            newFruit: inputValue
        })
    }

    handleClick () {
        this.setState({
            popularFruits: this.state.popularFruits.concat(this.state.newFruit)
        })
        this.setState({
            newFruit: ''
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.popularFruits}</h1>
                <input onChange={this.handleChange} type="text" id="fname" name="fname"/>
                <button
                    onClick={this.handleClick}
                >Increment
                </button>
            </>
        )
    }
}

export default PopularFruits
