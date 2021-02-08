import React from 'react'
import './App.css';
import SimpsonQuotes from './components/SimpsonQuotes'
import axios from 'axios'

class App extends React.Component{
  // constructor(props){
  //   super(props)
    state = {
      quotes: ''
    }

  getQuotes =() =>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.data)
    .then(data => {this.setState({quotes:data[0]})})
  }
  render(){
    return (
      <div className="App">
        <SimpsonQuotes quotes={this.state.quotes}/>
        <button type="button" onClick={this.getQuotes}>Get quotes</button>
      </div>
    );
  }
  
}

export default App;
