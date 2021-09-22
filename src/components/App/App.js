import React from 'react';
import Header from "../Header/Header";
import Order from "../Order/Order";
import MenuAdmin from "../MenuAdmin/MenuAdmin";


class App extends React.Component {
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger"/>
        </div>
        <Order/>
        <MenuAdmin/>
      </div>
    );
  }
}

export default App;