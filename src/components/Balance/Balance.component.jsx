import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  Wrapper,
  BalanceAmount,
  IncomeExpense,
  Income,
  Expense,
} from "./Balance.style";

const Balance = () => {
  const { totalAmount, totalIncome, totalExpense } = useContext(GlobalContext);
  return (
    <Wrapper>
      <BalanceAmount>
        <span className="balance">Your Balance</span>
        <h3 className="balanceh3">$ {totalAmount}</h3>
      </BalanceAmount>
      <IncomeExpense>
        <Income>
          <span className="income">Income</span>
          <h4 className="h4income incomeActive">${totalIncome}</h4>
        </Income>
        <Expense>
          <span className="expense">Expense</span>
          <h4 className=" h4expense expenseActive">${totalExpense}</h4>
        </Expense>
      </IncomeExpense>
    </Wrapper>
  );
};

export default Balance;
