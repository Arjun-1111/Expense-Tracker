import React from "react";
import Balance from "../Balance/Balance.component";
import History from "../History/History.component";
import Transaction from "../Transactions/Transaction.component";
import { Wrapper } from "./MainContainer.style";

const MainContainer = () => {
  return (
    <Wrapper>
      <Balance />
      <History />
      <Transaction />
    </Wrapper>
  );
};

export default MainContainer;
