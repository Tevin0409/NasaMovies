import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import useApi from "./helpers/useApi";
import MovieCard from "./components/movieCard";

function App() {
  const getBannerImage = () =>
    axios.get(`https://api.nasa.gov/planetary/apod/?`, {
      params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
      },
    });
  const getMovieCatalog = () =>
    axios.get(`https://api.themoviedb.org/3/search/movie?`, {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
        language: "en-US",
        query: "NASA",
        include_adult: false,
        page: 1,
      },
    });
  const getBannerApi = useApi(getBannerImage);
  const getMovieApi = useApi(getMovieCatalog);

  useEffect(() => {
    getBannerApi.request();
    getMovieApi.request();
  }, []);

  return (
    <main className="main">
      <section className="banner">
        <h1 className="banner-header">
          <span>NASA: </span>Picture of the day{" "}
          <div>
            {getBannerApi.data &&
              new Intl.DateTimeFormat("en-GB", {
                dateStyle: "full",
              }).format(new Date(getBannerApi.data.date))}
          </div>
        </h1>

        {getBannerApi.data && getBannerApi.data.media_type === "image" ? (
          <img
            src={getBannerApi.data?.url}
            alt="Pic of the Day"
            className="banner-img"
          />
        ) : (
          <iframe
            title="banner-video"
            className="banner-video"
            src={getBannerApi.data?.url}
          />
        )}
      </section>
      <section className="movie-catalog">
        {getMovieApi.data &&
          getMovieApi.data.results?.map((movie) => (
            <MovieCard
              image={movie.poster_path}
              title={movie.original_title}
              description={movie.overview}
              popularity={movie.popularity}
              releaseDate={movie.release_date}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
