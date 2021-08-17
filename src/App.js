import React from "react";
import Messenger from "./messenger/Messenger";

import { GlobalStyle, StyledApp } from "./styles/StyledApp";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Messenger />
      </StyledApp>
    </>
  );
};

export default App;
