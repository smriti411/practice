import './App.css';
import UserList from './UserList';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import AboutUs from './AboutUs';
import UserDisplay from './UserDisplay';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route path="/users/:id">
          <UserDisplay />
        </Route>
        <Route path="/aboutus">
          <AboutUs/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
