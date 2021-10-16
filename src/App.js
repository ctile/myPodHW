import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPod from "./mypod/Index.js";
import seattle_classic from "./mypod/photos/seattle_classic.jpg";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPod />
        </Route>
        <Route exact path="/html/seattle_classic.html">
          <seattle_classic />
        </Route>
        <Route exact path="/somewhere/foo.html">
          You've reached the foo page!
        </Route>
        <Route path="/">404 File Not Found! :-(</Route>
      </Switch>
    </Router>
  );
}
