import styled from "styled-components";

type Props = {
  background?: string;
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
};

const StyleLine = styled.div<Props>`
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
`;

const Line = ({ background, margin, height, width, padding }: Props) => {
  return (
    <StyleLine
      background={background}
      margin={margin}
      height={height}
      width={width}
      padding={padding}
    />
  );
};

export default Line;
