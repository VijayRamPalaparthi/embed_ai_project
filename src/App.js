import { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import CreateRoute from "./components/CreateRoute"
import ChatRoute from "./components/ChatRoute"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/create" component={CreateRoute} />
        <Route exact path="/profile/:id" component={ChatRoute} />
      </Switch>
    )
  }
}

export default App;

