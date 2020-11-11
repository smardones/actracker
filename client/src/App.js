import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from 'apollo-boost';

import Home from './pages/home';
import SignUp from './pages/signUp';
import Welcome from './pages/welcome';
import Bugs from './pages/bugs';
import NoMatch from './pages/NoMatch';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/bugs" component={Bugs} />

        <Route component={NoMatch} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
