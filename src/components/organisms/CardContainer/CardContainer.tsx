import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Colors, Size } from "../../variables/GlobalStyles";
import Spacer from "../../atoms/Spacer/Spacer";
import MovieCard from "../MovieCard/MovieCard";
import MovieSection from "../../MovieSection/MovieSection";

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;
type Props = {
  padding?: string;
};

const CardContainer = ({ padding }: Props) => {
  return (
    <div>
      <MediaQuery maxWidth={1000}>
        <GlobalCardContainerDisplay padding={padding}>
          <MovieSection />
        </GlobalCardContainerDisplay>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <GlobalCardContainerDisplay padding={padding}>
          <MovieSection />
        </GlobalCardContainerDisplay>
      </MediaQuery>
    </div>
  );
};

const GlobalCardContainerDisplay = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  background-color: ${Secondary};

  @media screen and (min-width: 1001px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    background-color: ${Secondary};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    height: 90vh;
    overflow: auto;
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
  }
`;

export default CardContainer;
