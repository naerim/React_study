import React from "react";
import Main from "./components/main";
import Login from "./components/login";
import Todos from "./components/todos";
import Category from "./components/category";

const App = () => {
  return (
    <div>
      <Category />
      <Todos />
    </div>
  );
};

export default App;
