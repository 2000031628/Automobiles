import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Tesla from './components/Tesla';
import Tesla1 from './components/Tesla1';
import Tesla2 from './components/Tesla2';
import Car from './components/Car';
import Car1 from './components/Car1';
import Car2 from './components/Car2';
import Car3 from './components/Car3';
import Car4 from './components/Car4';
import Career from './components/pages/Career';
import Pupil from './components/pages/Pupil';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Tesla' component={Tesla} />
          <Route path='/Tesla1' component={Tesla1} />
          <Route path='/Tesla2' component={Tesla2} />
          <Route path='/Car' component={Car} />
          <Route path='/Car1' component={Car1} />
          <Route path='/Car2' component={Car2} />
          <Route path='/Car3' component={Car3} />
          <Route path='/Car4' component={Car4} />
          <Route path='/Career' component={Career} />
          <Route path='/Pupil' component={Pupil}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
