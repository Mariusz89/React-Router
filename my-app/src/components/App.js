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
      <BrowserRouter>
      	<div className="App">
          //Exact instructs the router to render the component only, when the path matches the URL exactly.
     			<Route exact path="/" component={Home} />
          
          <Route path="/about" component={About} />
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
