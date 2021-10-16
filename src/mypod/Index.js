import seattle_video from "./thumbnails/seattle_video.jpg";
import applestore from "./thumbnails/applestore.jpg";
import britain from "./thumbnails/britain.jpg";
import seattle_classic from "./thumbnails/seattle_classic.jpg";
import seattle_downtown from "./thumbnails/seattle_downtown.jpg";
import seattle_shuffle from "./thumbnails/seattle_shuffle.jpg";

import seattle_video_xl from "./photos/seattle_video.jpg";
import applestore_xl from "./photos/applestore.jpg";
import britain_xl from "./photos/britain.jpg";
import seattle_classic_xl from "./photos/seattle_classic.jpg";
import seattle_downtown_xl from "./photos/seattle_downtown.jpg";
import seattle_shuffle_xl from "./photos/seattle_shuffle.jpg";

import { Link } from "react-router-dom";
import mypodlogo from "/src/mypod/logo/mypod-transparent-logo.gif";
import ThumbnailLink from "./ThumbnailLink.js";

function MyPod() {
  return (
    <div>
      <p>
        <img src={mypodlogo} alt="myPod Logo" />
      </p>
      <h1>Welcome to myPod</h1>
      <p>
        Welcome to the place to show off your iPod, wherever you might be. Wanna
        join the fun? All you need is any iPod from the early classic iPod to
        the latest iPod Nano, the smallest iPod Shuffle to the largest iPod
        Video, and a digital camera. Just take a snapshot of your iPod in your
        favorite location and we'll be glad to post it on myPod. So, what are
        you waiting for?
      </p>
      <h2>Seattle, Washington</h2>
      <p>
        Me and my iPod in Seattle! You can see the Space Needle. You can't see
        the 628 coffee shops.
      </p>
      <p>
        <ThumbnailLink
          lowResThumb={seattle_video}
          highResThumb={seattle_video_xl}
          width={150}
          height={100}
          alt="My video iPod in Seattle, WA"
          pageName="seattle_video"
        />
        <ThumbnailLink
          lowResThumb={seattle_classic}
          highResThumb={seattle_classic_xl}
          width={150}
          height={100}
          alt="A classic iPod in Seattle, WA"
          pageName="seattle_classic"
        />
        <ThumbnailLink
          lowResThumb={seattle_shuffle}
          highResThumb={seattle_shuffle_xl}
          width={150}
          height={100}
          alt="An iPod Shuffle in Seattle, Wa"
          pageName="seattle_shuffle"
        />
        <ThumbnailLink
          lowResThumb={seattle_downtown}
          highResThumb={seattle_downtown_xl}
          width={150}
          height={100}
          alt="An iPod in downtown Seattle, WA"
          pageName="seattle_downtown"
        />
      </p>
      <h2>Birmingham, England</h2>
      <p>
        Here are some iPod photos around Birmingham. We've obviously got some
        passionate folks over here who love their iPods. Check out the classic
        red British telephone box!
      </p>
      <p>
        <ThumbnailLink
          lowResThumb={applestore}
          highResThumb={applestore_xl}
          width={100}
          height={150}
          alt="An iPod at the Birmingham Apple store"
          pageName="applestore"
        />
        <ThumbnailLink
          lowResThumb={britain}
          highResThumb={britain_xl}
          width={100}
          height={150}
          alt="An iPod in Birmingham at a telephone box"
          pageName="britain"
        />
      </p>

      <p>
        <Link to="somewhere/foo.html">Go to the Foo page!</Link>
      </p>
    </div>
  );
}
export default MyPod;
