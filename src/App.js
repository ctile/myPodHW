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
import ImageFigure from "./mypod/ImageFigure.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPod />
        </Route>
        <Route exact path="/html/seattle_classic.html">
          <ImageFigure
            highResThumb={seattle_classic}
            alt="A classic iPod in Seattle, WA"
            width={600}
            height={400}
          />
          A classic iPod in Seattle, WA
        </Route>
        <Route exact path="/html/seattle_downtown.html">
          <ImageFigure
            highResThumb={seattle_downtown}
            alt="An iPod in downtown Seattle, WA"
            width={600}
            height={400}
          />
          An iPod in downtown Seattle, WA
        </Route>
        <Route exact path="/html/seattle_shuffle.html">
          <ImageFigure
            highResThumb={seattle_shuffle}
            alt="An iPod Shuffle in Seattle, Wa"
            width={600}
            height={400}
          />
          An iPod Shuffle in Seattle, Wa
        </Route>
        <Route exact path="/html/seattle_video.html">
          <ImageFigure
            highResThumb={seattle_video}
            alt="My video iPod in Seattle, WA"
            width={600}
            height={400}
          />
          My video iPod in Seattle, WA
        </Route>
        <Route exact path="/html/applestore.html">
          <ImageFigure
            highResThumb={applestore}
            alt="An iPod at the Birmingham Apple store"
            width={400}
            height={600}
          />
          An iPod at the Birmingham Apple store
        </Route>
        <Route exact path="/html/britain.html">
          <ImageFigure
            highResThumb={britain}
            alt="An iPod in Birmingham at a telephone box"
            width={400}
            height={600}
          />
          An iPod in Birmingham at a telephone box
        </Route>

        <Route exact path="/somewhere/foo.html">
          You've reached the foo page!
        </Route>
        <Route path="/">404 File Not Found! :-(</Route>
      </Switch>
    </Router>
  );
}
