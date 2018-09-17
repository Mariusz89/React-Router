import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import Directors from './Directors';
import Films from './Films';


class App extends Component {
  render() {
    return (
      /*'BrowserRouter', the root routing component, that keeps UI in sync with URL.
        'Route' is responsible for rendering a component in app, when the URL matches its path.
        'Exact' instructs the router to render the component only, when the path matches the URL exactly.
         I can also use example: <Route path="/films" component={Films} />
      */
      <BrowserRouter>
      	<div className="App">
          <Header />
          <Switch>
     			  <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About title="About"/>} />
            <Route path="/directors" render={() => <Directors />} />
            <Route path="/films" render={() => <Films />} />
            <Route render={() => <NotFound />} />
          </Switch>
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
