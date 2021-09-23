import React from 'react';
import Header from "../Header/Header";
import Order from "../Order/Order";
import MenuAdmin from "../MenuAdmin/MenuAdmin";


class App extends React.Component {
  state = {
    burgers: {},
    order: {}
  }

   addBurger = (burger) => {
     //Делаем копию обьекта state
     const burgers = {...this.state.burgers};
     //Добавить новый бургер в переменную burgers
     burgers[`burger${Date.now()}`] = burger;
     //Записать наш новый обьект burgers в state
     this.setState({burgers})
  }

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger"/>
        </div>
        <Order/>
        <MenuAdmin addBurger={this.addBurger}/>
      </div>
    );
  }
}

export default App;