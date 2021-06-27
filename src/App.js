import React from 'react';
import HalfPage from './components/HalfPage';
import OnionHunter from './components/OnionHunter';
import FunctionalCounter from './components/FunctionalCounter';
import Relax from './components/Relax';
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    const items = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];
    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {/* con este map iteramos iteramos el array de items */}
        {items.map(item => {
          // cada return retorna un li
          return (
            <li>
              <h2>Nombre: {item.name}</h2>
              <p>Descripción: {item.description}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Categoría: {item.category}</p>
              <p>Precio: {item.price}</p>
            </li>
            
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
        <HalfPage name={5} price="Hola"/>
        <OnionHunter background="red"/>
        <>
          <nav>
            <ul>
              <li>
                <Link to="/counter">Contador</Link>
              </li>
              <li>
                <Link to="/relax">Frase relajante</Link>
              </li>
            </ul>
          </nav>
        </>
        <main>
          <Switch>
            <Route path="/counter" component={FunctionalCounter} replace />
            <Route path="/relax" component={Relax} />
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;
