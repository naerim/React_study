import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Login from "./Components/Login";
import MyPage from "./Components/MyPage";
import Todos from "./Components/Todos";

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
