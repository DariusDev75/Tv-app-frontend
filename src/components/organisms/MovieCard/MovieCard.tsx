import React from "react";
import styled from "styled-components";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import { Circle } from "react-circle";
import { Colors, Size } from "../../variables/GlobalStyles";
import Button from "../../atoms/Button/Button";
import Spacer from "../../atoms/Spacer/Spacer";
const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;
type Props = {
  title?: string;
  posterPath?: string;
  releaseDate?: any;
  vote_average?: any;
};

const MovieCard = ({ title, posterPath, releaseDate, vote_average }: Props) => {
  return (
    <MovieCardContainer>
      <MovieImage src={posterPath}></MovieImage>
      <BottomCardSection>
        <ProgressBarContainer>
          <Circle
            progress={vote_average}
            progressColor="#fff"
            bgColor={Primary}
            textColor="#fff"
            size={"50"}
            lineWidth={"10"}
            showPercentageSymbol={true}
            textStyle={{ fontSize: "100px" }}
          />
        </ProgressBarContainer>
        <Spacer height="30px" />
        <Text color={"#fff"} size={"20px"} value={title} />
        <Spacer height="60px" />

        <BottomButtonDisplay>
          <Text color={"#fff"}>
            {releaseDate &&
              format(parseISO(releaseDate), "d MMMM", { locale: fr })}
          </Text>

          <Button>Watched</Button>
        </BottomButtonDisplay>
        <Spacer height="20px" />
      </BottomCardSection>
    </MovieCardContainer>
  );
};

const MovieCardContainer = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

const MovieImage = styled.img`
  width: 100%;
  height: max-content;
  object-fit: contain;
  overflow: hidden;
`;

const BottomCardSection = styled.div`
  background-color: ${Primary};

  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;

const BottomButtonDisplay = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 180px;
  background-color: #2b2929;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MovieCard;
