import React from "react";
import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
  handleClick?: any;
  color?: string;
  value?: string;
  children?: any;
  borderRadius?: string;
  type?: string;
  style?: any;
  padding?: string;
  margin?: string;
  textAlign?: string;
  justifyContent?: string;
  display?: string;
  alignItems?: string;
  border?: string;
  cursor?: string;
  flexDirection?: string;
  transition?: string;
  borderHover?: string;
  colorHover?: string;
  backgroundColorHover?: string;
  backgroundImageHover?: string;
  transitionHover?: string;
};

const StyleButton = styled.div<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  text-align: ${(props) => props.textAlign};
  justify-content: ${(props) => props.justifyContent};
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  transition: ${(props) => props.transition};
  flex-direction: ${(props) => props.flexDirection};
  &:hover {
    border: ${(props) => props.borderHover};
    color: ${(props) => props.colorHover};
    background-color: ${(props) => props.backgroundColorHover};
    background-image: ${(props) => props.backgroundImageHover};
    transition: ${(props) => props.transitionHover};
  }
`;

const Button = ({
  height,
  width,
  borderRadius,
  color,
  handleClick,
  children,
  type,
  style,
  padding,
  margin,
  textAlign,
  justifyContent,
  display,
  alignItems,
  border,
  cursor,
  flexDirection,
  transition,
  borderHover,
  colorHover,
  backgroundColorHover,
  backgroundImageHover,
  transitionHover,
}: Props) => {
  return (
    <StyleButton
      color={color}
      onClick={handleClick}
      height={height}
      width={width}
      borderRadius={borderRadius}
      type={type}
      style={style}
      padding={padding}
      margin={margin}
      display={display}
      alignItems={alignItems}
      textAlign={textAlign}
      justifyContent={justifyContent}
      border={border}
      cursor={cursor}
      flexDirection={flexDirection}
      borderHover={borderHover}
      transition={transition}
      colorHover={colorHover}
      backgroundColorHover={backgroundColorHover}
      backgroundImageHover={backgroundImageHover}
      transitionHover={transitionHover}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
