import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Routes/Main";
import Login from "../Routes/Login";
import MyPage from "../Routes/MyPage";
import Todos from "../Routes/Todos";

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
