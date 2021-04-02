import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home.jsx";
import AddBusiness from './components/AddBusiness';
import BuyTokens from './components/BuyTokens';
import ViewBusinesses from './components/ViewBusinesses';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
        <Route path="/buyTokens" component={BuyTokens} />
        <Route path="/addBusiness" component={AddBusiness} />
        <Route path="/viewBusinesses" component={ViewBusinesses} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" /> 
      </Switch>
    </div>
  );
}

export default App;
