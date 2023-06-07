import { GiHamburgerMenu } from "react-icons/gi/";
import { MdOutlineSmartDisplay } from "react-icons/md/";
import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import { Colors, Size } from "../../variables/GlobalStyles";
import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Line from "../../atoms/Line/Line";
import { useNavigate } from "react-router";

type Props = {};

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;

const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const ToggleNav = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  let navigate = useNavigate();
  const WatchedRedirection = () => {
    navigate("/watched");
  };
  const HomeRedirection = () => {
    navigate("/");
  };

  return (
    <div>
      <MediaQuery maxWidth={1000}>
        <GlobalStyledNavbar>
          <GiHamburgerMenu
            cursor={"pointer"}
            onClick={ToggleNav}
            size={"20px"}
            color="#fff"
          />
          <LogoFlex>
            <MdOutlineSmartDisplay size={"30px"} />
            <Text
              value={"TV APP"}
              padding="0  0 0 20px"
              fontWeight={"600"}
              size={Max}
              color={"#fff"}
            />
          </LogoFlex>
          <PO>
            {toggle && (
              <Drop data-aos="flip-down">
                <Text
                  value={"Home"}
                  handleClick={HomeRedirection}
                  colorHover="#fff"
                  cursor="pointer"
                />
                <Line
                  height="1px"
                  width="100%"
                  background="black"
                  margin="5px 0"
                />
                <Text
                  value={"Watched"}
                  handleClick={WatchedRedirection}
                  colorHover="#fff"
                  cursor="pointer"
                />
              </Drop>
            )}
          </PO>
        </GlobalStyledNavbar>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <GlobalStyledNavbar>
          <LogoFlex>
            <MdOutlineSmartDisplay size={"30px"} />
            <Text
              value={"TV APP"}
              fontWeight={"600"}
              padding={"0 0 0 10px"}
              size={XLMax}
              color={"#FFF"}
            />
          </LogoFlex>

          <SectionsFlex>
            <Text
              value={"Home"}
              handleClick={HomeRedirection}
              colorHover="#000"
              color={"#FFF"}
              cursor="pointer"
            />
            <Text
              value={"Watched"}
              handleClick={WatchedRedirection}
              colorHover="#000"
              color={"#FFF"}
              cursor="pointer"
            />
          </SectionsFlex>
        </GlobalStyledNavbar>
      </MediaQuery>
    </div>
  );
};

const GlobalStyledNavbar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 15px;
  background-color: ${Secondary};
  @media screen and (min-width: 1001px) {
  }
`;

const LogoFlex = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media screen and (min-width: 1001px) {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
  }
`;

const PO = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media screen and (min-width: 1001px) {
  }
`;

const Drop = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 20%;
  height: max-content;
  background-color: ${Primary};
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const SectionsFlex = styled.div`
  @media screen and (min-width: 1001px) {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
`;

export default Navbar;
