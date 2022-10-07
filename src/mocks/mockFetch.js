const bannerImageResponse = {
  data: {
    url: "https://apod.nasa.gov/apod/image/2210/ngc4631_sherick1024.jpg",
    media_type: "image",
  },
};

const moviesCatalogResponse = {
  results: [
    {
      id: 1234,
      original_title: "Nasa &Space x",
      overview: "lorem ",
      popularity: 0,
      release_date: "2022-05-05",
    },
  ],
};

export default async function mockFetch(url) {
  switch (url) {
    case "https://api.nasa.gov/planetary/apod/": {
      return {
        ok: true,
        status: 200,
        json: async () => bannerImageResponse,
      };
    }
    case "https://api.themoviedb.org/3/search/movie": {
      return {
        ok: true,
        status: 200,
        json: async () => moviesCatalogResponse,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
