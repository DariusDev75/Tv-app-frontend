import styled from "styled-components";

type Props = {
  value?: any;
  fontStyle?: string;
  margin?: string;
  padding?: string;
  size?: string;
  color?: any;
  listStyle?: string;
  fontWeight?: string;
  float?: string;
  letterSpacing?: string;
  cursor?: string;
  textDecoration?: string;
  handleClick?: any;
  textUnderlineOffset?: string;
  colorHover?: string;
  transitionHover?: string;
  alignSelf?: string;
  children?: any;
};

const StyleText = styled.div<Props>`
  font-size: ${(props) => props.size};
  font-style: ${(props) => props.fontStyle};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  list-style-type: ${(props) => props.listStyle};
  font-weight: ${(props) => props.fontWeight};
  float: ${(props) => props.float};
  letter-spacing: ${(props) => props.letterSpacing};
  cursor: ${(props) => props.cursor};
  text-decoration: ${(props) => props.textDecoration};
  text-underline-offset: ${(props) => props.textUnderlineOffset};
  align-self: ${(props) => props.alignSelf};
  &:hover {
    color: ${(props) => props.colorHover};
    transition: ${(props) => props.transitionHover};
  }
`;

const Text = ({
  size,
  fontStyle,
  fontWeight,
  margin,
  padding,
  value,
  color,
  listStyle,
  float,
  letterSpacing,
  cursor,
  textDecoration,
  handleClick,
  textUnderlineOffset,
  colorHover,
  transitionHover,
  alignSelf,
  children,
}: Props) => {
  return (
    <StyleText
      size={size}
      margin={margin}
      fontStyle={fontStyle}
      padding={padding}
      color={color}
      listStyle={listStyle}
      fontWeight={fontWeight}
      float={float}
      letterSpacing={letterSpacing}
      cursor={cursor}
      textDecoration={textDecoration}
      onClick={handleClick}
      textUnderlineOffset={textUnderlineOffset}
      colorHover={colorHover}
      transitionHover={transitionHover}
      alignSelf={alignSelf}
    >
      {value}
      {children}
    </StyleText>
  );
};

export default Text;
