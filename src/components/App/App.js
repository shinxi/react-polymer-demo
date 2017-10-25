import React from 'react';
import logo from './logo.svg';
import PolymerDemo from 'components/PolymerDemo';
import './App.scss';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ServiceMax!</h2>
        </div>
        <PolymerDemo />
      </div>
    );
  }
}
