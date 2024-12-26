export const getMovies = async () => {
  return await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=b6bb074d8552e2e6928be8718b334292"
  );
};

export const imgUrl = "https://image.tmdb.org/t/p/w500/";
