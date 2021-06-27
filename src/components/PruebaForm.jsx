import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             description: '',
             language: '',
             minAge: '',
             gender: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
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
        handleChangeAge(ev) {
            const minAge = ev.target.value;
            this.setState({
                minAge: minAge
            })
        }
        handleChangeCheck(ev) {
            const checkValue = ev.target.value;
            this.setState({
                gender: checkValue
            })
            console.log(this.state.gender)
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
                <div>
                    <input onChange={this.handleChangeAge} type="radio" id="A" name="all_publics" value="A" />
                    <label htmlFor="A">A</label>
                    <input onChange={this.handleChangeAge} type="radio" id="7" name="7" value="7"/>
                    <label for="7">7 años</label>
                    <input onChange={this.handleChangeAge} type="radio" id="12" name="12" value="12"/>
                    <label htmlFor="12">12 años</label>
                    <input onChange={this.handleChangeAge} type="radio" id="16" name="16" value="16"/>
                    <label htmlFor="16">16 años</label>
                    <input onChange={this.handleChangeAge} type="radio" id="18" name="18" value="18"/>
                    <label htmlFor="18">18 años</label>
                    <input type="reset"></input>
                </div>
                <div>
                    <input onChange={this.handleChangeCheck} type="checkbox" id="comedia" name="comedia" value="comedia"/>
                    <label htmlFor="comedia"> Comedy</label>
                    <input onChange={this.handleChangeCheck} type="checkbox" id="drama" name="drama" value="drama"/>
                    <label htmlFor="drama"> drama</label>
                    <input onChange={this.handleChangeCheck} type="checkbox" id="fantasía" name="fantasía" value="fantasía"/>
                    <label htmlFor="fantasía"> fantasía</label>
                    <input onChange={this.handleChangeCheck} type="checkbox" id="acción" name="acción" value="acción"/>
                    <label htmlFor="acción"> acción</label>
                    <input onChange={this.handleChangeCheck} type="checkbox" id="familia" name="familia" value="familia"/>
                    <label htmlFor="familia"> familia</label>
                    <input type="reset"></input>
                </div>
            </form>
            <div>
                <h1>Has elegido ver: {this.state.title}</h1>
                <h3>Te mostramos una pequeña sinopsis para que sepas de qué va la película: {this.state.description}</h3>
                <h4>EL idioma seleccionado para ver la película es: {this.state.language}</h4>
                <h3>La edad mínima para ver esta película es: {this.state.minAge} (siendo A para todos los públicos)</h3>
                <h3>El género que te gustaría ver es: {this.state.gender}</h3>
            </div>
            </>
        )
    }
}

export default Form