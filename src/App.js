import logo from './logo.svg';
import './App.css';
import NavBar from "./NavigationBar/NavBar.js";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
function App() {
  return ( 
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component = {NavBar}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
