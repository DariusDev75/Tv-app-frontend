import React from "react";
import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
  handleClick?: any;
  color?: any;
  value?: string;
  borderRadius?: string;
  backgroundColor: any;
  type?: string;
  style?: any;
  padding?: string;
  margin?: string;
  textAlign?: string;
  justifyContent?: string;
  display?: string;
  alignItems?: string;
  alignSelf?: string;
  justifySelf?: string;
  cursor?: string;
  HandleChange?: any;
};

const StyleInput = styled.input<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  text-align: ${(props) => props.textAlign};
  cursor: ${(props) => props.cursor};
  justify-content: ${(props) => props.justifyContent};
  justify-self: ${(props) => props.justifySelf};
  background-color: ${(props) => props.backgroundColor};
`;

const Input = ({
  height,
  width,
  borderRadius,
  color,
  handleClick,
  type,
  style,
  padding,
  margin,
  textAlign,
  justifyContent,
  display,
  alignItems,
  cursor,
  alignSelf,
  justifySelf,
  backgroundColor,
  HandleChange,
}: Props) => {
  return (
    <StyleInput
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
      alignSelf={alignSelf}
      textAlign={textAlign}
      justifyContent={justifyContent}
      justifySelf={justifySelf}
      cursor={cursor}
      onChange={HandleChange}
      backgroundColor={backgroundColor}
    />
  );
};

export default Input;
