import './App.css';
import React from 'react';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Estudar', 'Academia', 'Trabalho'];

class App extends React.Component {
  render() {
    return (
      <div>
        <ol>{ compromissos.map(compromisso => Task(compromisso)) }</ol>

        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
