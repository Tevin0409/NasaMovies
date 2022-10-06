import React from "react";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  let { id } = useParams();
  return <div>MovieDetails: {id} </div>;
};

export default MovieDetails;
