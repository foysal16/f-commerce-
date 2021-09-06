import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login/login"
import SignUp from "./Registraion/signup"
import HomeRouter from './Home/homeRouter';
///import HomeComponent from '../src/Components/Header/HeaderComponent'




function App() {
  return (
    <BrowserRouter>
    {/*<HomeComponent />*/}
      <Switch>
        <Route exact path="/">
          <HomeRouter />
        </Route>
        
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
