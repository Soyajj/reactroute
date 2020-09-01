import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Calculator from './components/Calculator';
import Todo from './components/Todo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <MainPage />
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/todo" component={Todo}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
