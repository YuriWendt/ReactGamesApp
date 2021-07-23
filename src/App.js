import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.component';
import { Home } from './Pages/Home/Home.component';
import { GameDetail } from './Pages/GameDetail/GameDetail.component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game/:name' component={GameDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
