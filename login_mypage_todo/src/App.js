import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Todos from "./components/todos";
import Category from "./components/category";
import MyPage from "./components/myPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/todos" component={Todos} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
