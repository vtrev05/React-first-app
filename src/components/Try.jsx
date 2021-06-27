import React, { Component } from 'react'

 class Try extends Component {
     constructor(props) {
         super(props);
         this.state = {
             input: ''
         };
         this.handleChange = this.handleChange.bind(this);
     }

        handleChange (ev) {
            const inputText = ev.target.value;
            this.setState({
                input: inputText
            });
        } 
    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text"></input>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default Try