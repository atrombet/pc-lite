import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Services, ServiceDetail, People, PersonDetail } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to="/services" className="App-link">Services</Link>
            <span> | </span>
            <Link to="/people" className="App-link">People</Link>
          </div>
        </header>
        <div className="App-body">
          <Switch>
            <Route path="/services/:id"><ServiceDetail /></Route>
            <Route path="/services"><Services /></Route>
            <Route path="/people/:id"><PersonDetail /></Route>
            <Route path="/people"><People /></Route>
            <Route path="/"><Redirect to="/services" /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
