import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import useApi from "./helpers/useApi";

function App() {
  const getBannerImage = () =>
    axios.get(`https://api.nasa.gov/planetary/apod/?`, {
      params: {
        api_key: "qN1eaQLr7gsRw4Y7a47baYKJrIn3CTngPOccwc03",
      },
    });
  const getBannerApi = useApi(getBannerImage);

  const isImgLink = (url) => {
    if (typeof url !== "string") {
      return false;
    }
    return (
      url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null
    );
  };

  useEffect(() => {
    // count = +1;

    getBannerApi.request();
    // console.log(count);
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

        {/* {getBannerApi.data && (
          <iframe
            title="video player"
            className="banner-img"
            src={getBannerApi.data.url}
          />
        )}
        */}
        {getBannerApi.data &&
          (isImgLink(getBannerApi.data.url) ? (
            <img
              src={getBannerApi.data.url}
              alt="Pic of the Day"
              className="banner-img"
            />
          ) : (
            <iframe
              title="video player"
              className="banner-video"
              src={getBannerApi.data.url}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
