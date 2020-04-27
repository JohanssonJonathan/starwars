import React from "react";
import styled from "@emotion/styled";
import Episode1 from "../../images/movies/episode1.jpg";
import Episode2 from "../../images/movies/episode2.jpg";
import Episode3 from "../../images/movies/episode3.jpg";
import Episode4 from "../../images/movies/episode4.jpg";
import Episode5 from "../../images/movies/episode5.jpg";
import Episode6 from "../../images/movies/episode6.jpg";

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 100px;

  @media only screen and (min-width: 1200px) {
    margin: auto;
    width: 80%;
  }
`;

const Content = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Image = styled("img")`
  display: flex;
  justify-self: center;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
  border: 2px solid white;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  opacity: 1;
  position: relative;

  :hover {
    opacity: 0.2;
  }

  @media only screen and (min-width: 800px) {
    width: 300px;
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 400px;
  }
`;

const Description = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 70%;
  height: 100%;
  align-items: center;
  z-index: -1;
  padding: 0 20px;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  line-height: 25px;

  @media only screen and (min-width: 800px) {
    width: 260px;
    font-size: 14px;
    line-height: 20px;
    padding: 0 10px;
  }

  @media only screen and (min-width: 1200px) {
    width: 350px;
  }
`;

const List = ({ movies }) => {
  const images = [
    { name: "the phantom menace", src: Episode1 },
    { name: "attack of the clones", src: Episode2 },
    { name: "revenge of the sith", src: Episode3 },
    { name: "a new hope", src: Episode4 },
    { name: "the empire strikes back", src: Episode5 },
    { name: "return of the jedi", src: Episode6 },
  ];

  return (
    <Wrapper>
      {movies.map(({ fields: { title, opening_crawl, release_date } }, i) => {
        const foundImage = images.find((item) =>
          title.toLowerCase().includes(item.name.toLowerCase())
        );
        return (
          <Content key={i}>
            <Image src={foundImage && foundImage.src} />
            <Description>
              <h3>{title}</h3>
              <p>{opening_crawl}</p>
              <span>Release date: {release_date}</span>
            </Description>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default List;
