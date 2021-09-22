import React from 'react';
import Header from "../Header/Header";
import Order from "../Order/order";
import MenuAdmin from "../MenuAdmin/MenuAdmin";


class App extends React.Component {
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header/>
        </div>
        <Order/>
        <MenuAdmin/>
      </div>
    );
  }
}

export default App;