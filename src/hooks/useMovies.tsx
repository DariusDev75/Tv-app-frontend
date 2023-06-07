import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types/types";

export const useMovie = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>();

  const getPopularMovies = useCallback(async () => {
    try {
      const response = await axios.get("/movies/popular");
      setPopularMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, []);

  const sortMoviesAlphabetically = useCallback(() => {
    const sortedMovies = popularMovies?.slice().sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setFilteredMovies(sortedMovies);
  }, [popularMovies]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (filteredMovies && filteredMovies.length > 0) {
      console.log("Filtered Movies:", filteredMovies);
    }
  }, [filteredMovies]);

  return { popularMovies, filteredMovies, sortMoviesAlphabetically };
};
