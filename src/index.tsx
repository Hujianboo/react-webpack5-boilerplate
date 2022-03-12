import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello'
interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Name'
    };
  }

  render() {
    return (
      <div>{this.state.name}<Hello/></div>
    )
  }
}

render(<App />, document.getElementById('root'));