import React, { Component } from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import Header from './Header';
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
      */
      <BrowserRouter>
      	<div className="App">
          <Header />
     			<Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/directors" component={Directors} />
          <Route path="/films" component={Films} />
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
