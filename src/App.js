import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPod from "./mypod/Index.js";
import seattle_classic from "./mypod/photos/seattle_classic.jpg";
import seattle_downtown from "./mypod/photos/seattle_downtown.jpg";
import seattle_shuffle from "./mypod/photos/seattle_shuffle.jpg";
import seattle_video from "./mypod/photos/seattle_video.jpg";
import seattle_video_med from "./mypod/photos/seattle_video_med.jpg";
import applestore from "./mypod/photos/applestore.jpg";
import britain from "./mypod/photos/britain.jpg";

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
        <Route exact path="/html/seattle_downtown.html">
          <seattle_downtown />
        </Route>
        <Route exact path="/html/seattle_shuffle.html">
          <seattle_shuffle />
        </Route>
        <Route exact path="/html/seattle_video.html">
          <seattle_video />
        </Route>
        <Route exact path="/html/seattle_video_med.html">
          <seattle_video_med />
        </Route>
        <Route exact path="/html/applestore.html">
          <applestore />
        </Route>
        <Route exact path="/html/britain.html">
          <britain />
        </Route>

        <Route exact path="/somewhere/foo.html">
          You've reached the foo page!
        </Route>
        <Route path="/">404 File Not Found! :-(</Route>
      </Switch>
    </Router>
  );
}
