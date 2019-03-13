import React, { Component } from 'react';
import { C3 } from './components/C3';
import { Login } from './components/Login';

export const Context = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HCL'
    }
  }

  change = () => {
    this.setState({name: "HCL Tech"})
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.change}>Click</button>
        <Context.Provider value={this.state.name}>
          <C3 />
          <Login />
        </Context.Provider>
      </div>
    );
  }
}
export default App;
