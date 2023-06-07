import React, { useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Colors, Size } from "../../variables/GlobalStyles";
import Spacer from "../../atoms/Spacer/Spacer";
import { useForm } from "react-hook-form";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import axios from "axios";
import { useMovie } from "../../../hooks/useMovies";

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;

type Props = {
  height?: string;
  width?: string;
  padding?: string;
};

const CardFormFilter = ({ height, width, padding }: Props) => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedAlphabet, setSelectedAlphabet] = useState("");

  const handleSortClick = () => {
    sortMoviesAlphabetically();
  };

  const onSubmit = (data: any) => {
    console.log(data);

    if (data.alphabet === "A-Z") {
      sortMoviesAlphabetically();
    }
    if (data.alphabet === "Z-A") {
      console.log("first");
    }
  };

  const handleReset = () => {
    reset();
  };
  const { popularMovies, filteredMovies, sortMoviesAlphabetically } =
    useMovie();

  return (
    <div>
      <MediaQuery maxWidth={1000}>
        <GlobalCardFormFilterDisplay padding={padding}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FilterContainer>
              <div>
                <FilterLabel htmlFor="genre">
                  <Text value={"Genre:"} color={"#fff"} />
                </FilterLabel>
                <FilterSelect id="genre" {...register("genre")}>
                  <option value="all">Tous les genres</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comédie</option>
                  <option value="drama">Drame</option>
                </FilterSelect>
              </div>

              <div>
                <FilterLabel htmlFor="popularity">
                  <Text value={"Popularité:"} color={"#fff"} />
                </FilterLabel>
                <FilterSelect id="popularity" {...register("popularity")}>
                  <option value="+ -">Ordre Croissant</option>
                  <option value="- +">Ordre Décroissant</option>
                </FilterSelect>
              </div>
              <div>
                <FilterLabel htmlFor="alphabet">
                  Ordre Alphabétique:
                </FilterLabel>
                <FilterSelect
                  id="alphabet"
                  value={selectedAlphabet}
                  onChange={(e) => setSelectedAlphabet(e.target.value)}
                >
                  <option value="A-Z">A - Z</option>
                  <option value="Z-A">Z - A</option>
                </FilterSelect>
              </div>

              <div>
                <FilterLabel htmlFor="Keyword">
                  <Text value={"Mot-clés:"} color={"#fff"} />
                </FilterLabel>
                <FilterInput placeholder="Avatar..." {...register("Keyword")} />
              </div>
            </FilterContainer>
            <FilterButtonContainer>
              <FilterButton type="button" onClick={handleReset}>
                <Text value={"Reset"} color={"#000"} fontWeight="bold" />
              </FilterButton>
              <FilterButton type="submit">
                <Text value={"Rechercher"} color={"#000"} fontWeight="bold" />
              </FilterButton>
            </FilterButtonContainer>
          </form>
        </GlobalCardFormFilterDisplay>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <GlobalCardFormFilterDisplay height={height} width={width}>
          <Text value={"Filtres"} color={"#fff"} size={Max} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <FilterContainer>
              <div>
                <FilterLabel htmlFor="genre">Genre:</FilterLabel>
                <FilterSelect id="genre" {...register("genre")}>
                  <option value="">Tous les genres</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comédie</option>
                  <option value="drama">Drame</option>
                </FilterSelect>
              </div>

              <div>
                <FilterLabel htmlFor="popularity">Popularité:</FilterLabel>
                <FilterSelect id="popularity" {...register("popularity")}>
                  <option value="0-30">0 - 30 %</option>
                  <option value="30-70">30 - 70 %</option>
                  <option value="70-100">70 - 100 %</option>
                </FilterSelect>
              </div>

              <div>
                <FilterLabel htmlFor="alphabet">
                  Ordre Alphabétique:
                </FilterLabel>
                <FilterSelect
                  id="alphabet"
                  value={selectedAlphabet}
                  onChange={(e) => setSelectedAlphabet(e.target.value)}
                >
                  <option value="A-Z">A - Z</option>
                  <option value="Z-A">Z - A</option>
                </FilterSelect>
              </div>

              <div>
                <FilterLabel htmlFor="Keyword">Mot-clés:</FilterLabel>
                <FilterInput placeholder="Avatar..." {...register("Keyword")} />
              </div>
            </FilterContainer>
            <Spacer height="5vh" />
            <FilterButton type="button" onClick={handleReset}>
              Reset
            </FilterButton>

            <FilterButton onClick={handleSubmit(onSubmit)} type="submit">
              Rechercher
            </FilterButton>
          </form>
        </GlobalCardFormFilterDisplay>
      </MediaQuery>
    </div>
  );
};

const GlobalCardFormFilterDisplay = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${Secondary};

  @media screen and (min-width: 1001px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${Secondary};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 0px 10px;
  }
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1001px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: auto;
  }
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid Gray;
  border-radius: 4px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid Gray;
  border-radius: 4px;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media screen and (min-width: 1001px) {
    margin-top: 2rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${Primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media screen and (min-width: 1001px) {
    padding: 0.5rem 2rem;
    background-color: ${Primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
`;

export default CardFormFilter;
