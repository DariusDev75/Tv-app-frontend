import React from "react";
import Text from "../../atoms/Text/Text";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import CardContainer from "../../organisms/CardContainer/CardContainer";
import { Colors, Size } from "../../variables/GlobalStyles";
import Spacer from "../../atoms/Spacer/Spacer";

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;

type Props = {};

const WatchedContent = (props: Props) => {
  return (
    <div>
      <MediaQuery maxWidth={1000}>
        <GlobalWatchedContentDisplay>
          <Text
            alignSelf="center"
            value={"Watched"}
            size={Max}
            fontWeight="bold"
            color={"#fff"}
            padding="10px 0"
          />

          <CardContainer />
        </GlobalWatchedContentDisplay>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <GlobalWatchedContentDisplay>
          <Text
            alignSelf="center"
            value={"Watched"}
            size={Max}
            fontWeight="bold"
            color={"#fff"}
            padding="20px 0"
          />
          <CardContainer />
        </GlobalWatchedContentDisplay>
      </MediaQuery>
    </div>
  );
};

const GlobalWatchedContentDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${Primary};

  @media screen and (min-width: 1001px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${Primary};
  }
`;

const CardsDisplay = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default WatchedContent;
