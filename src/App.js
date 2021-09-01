import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Login from "./Login/login"
import SignUp from "./Registraion/signup"
import Dashboad from "./Dashboard/dashboad"
import HomeRouter from './Home/homeRouter';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeRouter />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/dashboard">
          <Dashboad />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
