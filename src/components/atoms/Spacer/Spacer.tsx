import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
};

const StyleSpacer = styled.div<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Spacer = ({ height, width }: Props) => {
  return <StyleSpacer height={height} width={width} />;
};

export default Spacer;
