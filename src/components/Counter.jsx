import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  
  componentDidMount() {
    console.log('Se está ejecuntando el método NOMBRE_DEL_MÉTODO')
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }
  componentWillUnmount() {
    console.log('Se está ejecuntando el método NOMBRE_DEL_MÉTODO')
    // limpiamos el interval
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    console.log('Se está ejecuntando el método NOMBRE_DEL_MÉTODO')
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;