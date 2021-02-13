import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';


const getStateFromLocalStorage =() =>{
  const storage = localStorage.getItem('counterStorage');
  if(storage) return JSON.parse(storage);
  return {count : 0};
}


class Counter extends Component {
  constructor(props){
    super(props);
    this.state =getStateFromLocalStorage();
    this.increment= this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDocumnet = this.updateDocumnet.bind(this);
  }
  updateDocumnet(){
    document.title = this.state.count;
  }
  increment(){
    this.setState((state, props)=>{
      const {max, step} = props;
      if(state.count >= 50) return;
      return { count: state.count+6 };
    }, this.updateDocumnet());
  }

  decrement(){
    this.setState(({count})=>{
      return {count: count - 1};
    }, this.updateDocumnet());
  }
  reset(){
    this.setState({count: 0}, this.updateDocumnet());
  }
  render() {
    const {count } = this.state;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById('root'));



