import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import WatchedPage from "./components/pages/WatchedPage";
import Navbar from "./components/content/Navbar/Navbar";
import styled from "styled-components";
import ErrorPage from "./components/pages/ErrorPage";
import { Colors, Size } from "./components/variables/GlobalStyles";
import AuthentPage from "./components/pages/AuthentPage";

const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;
type Props = {};

const routes = (
  <>
    <Route index element={<HomePage />} />;
    <Route path="/watched" element={<WatchedPage />} />;
    <Route path="/Authent" element={<AuthentPage />} />;
    <Route path="/*" element={<ErrorPage />} />;
  </>
);

const App = (props: Props) => {
  return (
    <GlobalDisplay style={{}}>
      <Router>
        <Navbar />
        <Switch>{routes}</Switch>
      </Router>
    </GlobalDisplay>
  );
};

const GlobalDisplay = styled.div`
  height: "100vh";
  width: "100%";
  background-color: ${Primary};

  @media screen and (min-width: 1001px) {
  }
`;

export default App;
