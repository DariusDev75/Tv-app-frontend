import styled from "styled-components";

type Props = {
  src?: any;
  height?: string;
  maxHeight?: string;
  width?: string;
  margin?: string;
  padding?: string;
  handleClick?: any;
  alt?: string;
};

const StyleIcon = styled.img<Props>`
  src: ${(props) => props.src};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-height: ${(props) => props.maxHeight};
`;

const Icon = ({
  src,
  height,
  width,
  handleClick,
  margin,
  padding,
  maxHeight,
  alt,
}: Props) => {
  return (
    <StyleIcon
      src={src}
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      onClick={handleClick}
      max-height={maxHeight}
      alt={alt}
    />
  );
};

export default Icon;
