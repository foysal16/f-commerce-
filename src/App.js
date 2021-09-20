import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login/login";
import SignUp from "./Registraion/signup";
import HomeRouter from "./Home/homeRouter";
import Dashboard from "../src/Components/BodyComponent/Dashboard/Dashboard";
import ProductList from "../src/Components/BodyComponent/Dashboard/ProductList";
import Users from "../src/Components/BodyComponent/Dashboard/UserList";
import Orders from "../src/Components/BodyComponent/Dashboard/OrderList";
import ProductAdd from "../src/Components/BodyComponent/Dashboard/ProductAdd";
import AddUser from "../src/Components/BodyComponent/Dashboard/MainPages/EditUser";
import { useSelector } from "react-redux";

function App() {
  const { role } = useSelector((store) => store.authReducerStore);
  return (
    <BrowserRouter>
      <Switch>
        {role === "admin" && (
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        )}
        ,
        {role === "admin" && (
          <Route exact path="/productList" render={() => <ProductList />} />
        )}
        ,{" "}
        {role === "admin" && (
          <Route exact path="/productadd" render={() => <ProductAdd />} />
        )}
        ,{" "}
        {role === "admin" && (
          <Route exact path="/users" render={() => <Users />} />
        )}
        ,{" "}
        {role === "admin" && (
          <Route exact path="/orders" render={() => <Orders />} />
        )}
        ,
        {role === "admin" && (
          <Route exact path="/add-user" render={() => <AddUser />} />
        )}
        <Route exact path="/">
          <HomeRouter />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
