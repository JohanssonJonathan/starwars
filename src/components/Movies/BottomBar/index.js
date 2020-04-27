import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Sort from "./Sort";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding-bottom: 20px;

  @media only screen and (min-width: 800px) {
    justify-content: flex-end;
    top: unset;
    right: 0;
    left: 0;
    bottom: 0;
    flex-direction: row;
    padding: 0;
  }
`;

const Input = styled("input")`
  width: 90%;
  font-size: 20px;
  padding: 5px;
  text-decoration: none;
  caret-color: green;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (min-width: 800px) {
    width: 20%;
    margin-right: 50px;
  }
`;

const BottomBar = ({ setMovies, movies, search, setSearch }) => {
  const inputField = useRef(null);

  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <Wrapper>
      <Sort setMovies={setMovies} movies={movies} />
      <Input
        ref={inputField}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="May the force guide you"
      />
    </Wrapper>
  );
};

export default BottomBar;
