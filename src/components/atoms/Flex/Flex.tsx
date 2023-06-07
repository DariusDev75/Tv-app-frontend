import React from "react";
import styled from "styled-components";

type Props = {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  padding?: string;
  children?: React.ReactNode;
  display?: "flex" | "inline-flex";
  width?: string;
  height?: string;
};

const Flex = ({
  flexDirection,
  justifyContent,
  alignContent,
  alignItems,
  flexWrap,
  padding,
  display,
  children,
  width,
  height,
}: Props) => {
  return <StyledFlex>{children}</StyledFlex>;
};

export default Flex;

const StyledFlex = styled.div<Props>`
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  flex-wrap: ${(props) => props.flexWrap};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
`;
