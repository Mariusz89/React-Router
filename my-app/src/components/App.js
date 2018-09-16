import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Directors from './Directors';
import Films from './Films';
import Thriller from './Films/Thriller';
import Horror from './Films/Horror';
import Sci_Fi from './Films/Sci_Fi';


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
     			<Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About title="About"/>} />
          <Route path="/directors" render={() => <Directors />} />
          <Route path="/films" render={() => <Films />} />
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
