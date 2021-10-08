import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as pages from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.home} />
        <Route path="/test" component={pages.test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
