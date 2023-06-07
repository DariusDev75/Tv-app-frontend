import React from "react";
import styled from "styled-components";
import { Colors, Size } from "../variables/GlobalStyles";
import Text from "../atoms/Text/Text";
import { useMovie } from "../../hooks/useMovies";
import MovieCard from "../organisms/MovieCard/MovieCard";
import Flex from "../atoms/Flex/Flex";

const { Secondary, Primary } = Colors;
const { Max, Min, Normal, XLMax } = Size;

type Props = {};

const MovieSection = ({}: Props) => {
  const { popularMovies, filteredMovies, sortMoviesAlphabetically } =
    useMovie();
  const handleSortClick = () => {
    sortMoviesAlphabetically();
  };

  return (
    <div>
      <StyledScrollbars>
        <GridMovie>
          {popularMovies?.map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                posterPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                releaseDate={movie.release_date}
              />
            </div>
          ))}
        </GridMovie>
      </StyledScrollbars>
    </div>
  );
};

const StyledScrollbars = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 20px 0;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
const GridMovie = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
  @media screen and (min-width: 1001px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default MovieSection;
