import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Colors, Size } from "../../variables/GlobalStyles";
import CardFormFilter from "../../organisms/CardFormFilter/CardFormFilter";
import Text from "../../atoms/Text/Text";
import CardContainer from "../../organisms/CardContainer/CardContainer";
import Spacer from "../../atoms/Spacer/Spacer";
import Flex from "../../atoms/Flex/Flex";

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <StyledHomeContent>
      <MediaQuery maxWidth={1000}>
        <Flex display="flex" justifyContent="center" width="100%">
          <Text
            alignSelf="center"
            color={"#fff"}
            padding="10px 0"
            size={Max}
            value={"Filter"}
          />
        </Flex>
        <CardFormFilter padding="20px 0" />
        <Flex display="flex" justifyContent="center" width="100%">
          <Text
            alignSelf="center"
            color={"#fff"}
            padding="10px 0"
            size={Max}
            value={"Series"}
          />
        </Flex>
        <CardContainer />
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <Spacer height="5vh" />
        <DisplayCards>
          <CardFormFilter height="100%" width="300px" />
          <CardContainer />
        </DisplayCards>
      </MediaQuery>
    </StyledHomeContent>
  );
};

const StyledHomeContent = styled.div`
  min-height: 100vh;
`;

const DisplayCards = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: ${Primary};
    overflow: hidden;
  }
`;

export default HomeContent;
