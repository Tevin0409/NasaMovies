import React from "react";
import "./movieCard.css";
import defaultPic from "../assets/images/default.png";

function CardImage({ image }) {
  const isImageURL = image;
  // If an image was passed:
  if (isImageURL) {
    return (
      <img src={process.env.REACT_APP_IMAGE_BASE_URL + image} alt="card pic" />
    );
  }
  return <img src={defaultPic} alt="card pic" />;
}
function CardContent({ title, description, popularity, releaseDate }) {
  return (
    <div className="card-details">
      <h2>{title}</h2>
      <h4>Description</h4>
      <p>{description}</p>
      <p>
        Popularity: <span className="statistic">{popularity}</span>{" "}
      </p>
      <p>
        Release Date: <span className="statistic">{releaseDate}</span>{" "}
      </p>
    </div>
  );
}
export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <CardImage image={this.props.image} />
        <CardContent
          title={this.props.title}
          description={this.props.description}
          popularity={this.props.popularity}
          releaseDate={this.props.releaseDate}
        />
      </div>
    );
  }
}

Card.defaultProps = {
  title: "Movie - Movie Title",
  popularity: 0,
  releaseDate: "2020-05-05",
  description: "Movie description textbox",
};
