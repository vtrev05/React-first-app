import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
        super(props);
            this.state = {
            firstName: 'Ada',
            lastName: 'Lovelace',
            birthDate: {
            day: 10,
            month: 'diciembre',
            year: 1815
        }
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ev) {
        const myFirstName = ev.target.value;
        this.setState({
            firstName: myFirstName
        })
    }


    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label>
                <input onChange={this.handleChange} type="text" id="firstname" name="fname"/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
            </form>
        )
    }
}


export default UserInfo
