import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={User} />
    </Switch>
  );
}

export default App;
