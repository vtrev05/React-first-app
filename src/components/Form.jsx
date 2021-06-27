import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             description: '',
             language: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }
    
    handleChange(ev) {
        const filmName = ev.target.value;
        this.setState({
            title: filmName
        })
    }

    handleAreaChange(ev) {
        const textAreaContent = ev.target.value;
        this.setState({
            description: textAreaContent
        })
    }

    handleChangeSelect(ev) {
        const selectedLanguage = ev.target.value;
        this.setState({
            language: selectedLanguage
        })
    }

    render() {
        return (
            <>
            <form>
                <input onChange={this.handleChange} type="text" id="filmName" name="filmName"/>
                <textarea onChange={this.handleAreaChange}></textarea>
                <label>Elija el idioma de reproducción:</label>
                <select onChange={this.handleChangeSelect}>
                    <option value="Spanish">Spanish</option>
                    <option value="English">English</option>
                    <option value="Portuguese">Portuguese</option>
                </select>
            </form>
            <div>
                <h1>Has elegido ver: {this.state.title}</h1>
                <h3>Te mostramos una pequeña sinopsis para que sepas de qué va la película: {this.state.description}</h3>
                <h4>EL idioma seleccionado para ver la película es: {this.state.language}</h4>
            </div>
            </>
        )
    }
}

export default Form
