const getMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=ea6c8b1ffdc73cb207766da4947ec614`,
  );
  const data = await res.json();
  const moviesList = await data.results;
  return moviesList;
};

export default getMovies;
