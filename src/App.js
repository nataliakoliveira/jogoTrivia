import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.pizza-shoppe.com/wp-content/uploads/2020/08/Trivia-Night-Text-Glow.png"
          className="App-logo"
          alt="logo"
        />
        <div>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/game" component={ Game } />
            <Route exact path="/feedback" component={ Feedback } />
            <Route exact path="/ranking" component={ Ranking } />
            <Route exact path="/settings" component={ Settings } />
          </Switch>
        </div>
      </header>
    </div>
  );
}
