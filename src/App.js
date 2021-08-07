import React from "react";
import MainContainer from "./components/MainContainer/MainContainer.component";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <MainContainer />
    </GlobalProvider>
  );
}

export default App;
