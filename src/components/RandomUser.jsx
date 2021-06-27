import React, { Component } from 'react'


export class RandomUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userInfo: ['Hola']
        }
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
            this.setState({
                userInfo: data.results.id
            });
            });
        console.log(this.state.userInfo)
        
    }
    

    render() {
        return (
            <>
                <button
                onClick={this.handleClick}
                >Generar personas random
                </button>
                <div>
                    <h1>{this.state.userInfo}</h1>
                </div>
            </>
        )
    }
}

export default RandomUser
