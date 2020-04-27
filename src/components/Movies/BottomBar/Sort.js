import React from "react";
import styled from "@emotion/styled";
import { sortMovies } from "../../../utils/sortMovies";

const Wrapper = styled("div")`
  font-weight: 300;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-around;

  @media only screen and (min-width: 800px) {
    width: 50%;
    justify-content: flex-end;
    margin-right: 50px;
  }
`;

const Selection = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Order = styled("h4")`
  margin-right: 10px;
  font-weight: 200;
  padding: 5px 20px;
  cursor: pointer;
  color: ${({ current }) => (current ? "white" : "gray")};

  :last-child {
    margin-right: 0;

    @media only screen and (min-width: 800px) {
      border-right: 1px solid white;
    }
  }
`;

const Description = styled(Order)`
  margin-right: 30px;
  padding: 5px 20px;
  color: rgba(255, 255, 255, 0.8);
  display: none;

  @media only screen and (min-width: 800px) {
    display: block;
    border-right: 1px solid white;
  }
`;

const Sort = ({ setMovies, movies }) => {
  const sortBy = (current) =>
    setMovies({
      search: sortMovies(movies.search, current),
      allMovies: sortMovies(movies.allMovies, current),
      current: current ? current : "episode",
    });


  
  return (
    <Wrapper>
      <Description>Sort By</Description>
      <Selection>
        <Order
          current={movies.current === "title" ? 1 : 0}
          onClick={() => sortBy("title")}
        >
          Alphabetic
        </Order>
        <Order
          current={movies.current === "episode" ? 1 : 0}
          onClick={() => sortBy()}
        >
          Episode
        </Order>
        <Order
          current={movies.current === "release_date" ? 1 : 0}
          onClick={() => sortBy("release_date")}
        >
          Release
        </Order>
      </Selection>
    </Wrapper>
  );
};

export default Sort;
