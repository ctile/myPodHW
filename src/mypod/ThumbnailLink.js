import { Link } from "react-router-dom";

function ThumbnailLink(props) {
  return (
    <Link to={`html/${props.pageName}.html`}>
      <img
        src={props.lowResThumb}
        srcSet={`${props.highResThumb} ${4 * props.width}w,
                 ${props.lowResThumb} ${props.width}w`}
        sizes={`(min-width: 481px) 25vw,
100vw`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}

export default ThumbnailLink;
