import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import List from "./List";
import BottomBar from "./BottomBar";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled("h2")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-weight: 300;
`;

const Movies = () => {
  const [apiConnection, setApiConnection] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({
    search: null,
    allMovies: null,
    current: null,
  });

  useEffect(() => {
    fetch("https://star-wars-api.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => setMovies({ search: [], allMovies: data }))
      .catch((err) => setApiConnection(true));
  }, []);

  useEffect(() => {
    const filterMoviesBySearch =
      movies.allMovies &&
      movies.allMovies.filter(
        (movie) =>
          movie.fields.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(search.split(" ").join("").toLowerCase()) && movie
      );

    setMovies({
      search: filterMoviesBySearch,
      allMovies: movies.allMovies,
      current: movies.current,
    });
  }, [search]);

  return apiConnection ? (
    <ErrorMessage>Unfortunately no movies where found</ErrorMessage>
  ) : movies.allMovies || movies.search ? (
    <Wrapper>
      <List movies={search ? movies.search : movies.allMovies} />
      <BottomBar
        setMovies={setMovies}
        movies={movies}
        search={search}
        setSearch={setSearch}
      />
    </Wrapper>
  ) : null;
};

export default Movies;
