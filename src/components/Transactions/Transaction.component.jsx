import React, { useContext, useRef } from "react";
import { Wrapper, Heading, Holder } from "./Transaction.style";
import { GlobalContext } from "../../Context/GlobalContext";

const Transaction = () => {
  const { income, expense, enterDetails } = useContext(GlobalContext);
  const id = useRef(0);

  const handleTransaction = (e) => {
    const text = document.querySelector("#Text");
    const amount = document.querySelector("#Amount");
    const intValue = parseInt(amount.value);
    // [persist data to local storage]
    let transaction;
    if (localStorage.getItem("transaction") === null) {
      transaction = [];
      id.current = 0;
    } else {
      transaction = JSON.parse(localStorage.getItem("transaction"));
      id.current = JSON.parse(localStorage.getItem("id"));
    }

    const details = { id: id.current++, text: text.value, value: intValue };

    if (amount.value.substring(0, 1) === "+") {
      income(intValue);
      enterDetails(details);
      transaction.push(details);
      localStorage.setItem("transaction", JSON.stringify(transaction));
      localStorage.setItem("id", JSON.stringify(id.current));
      text.value = "";
      amount.value = "";
    } else if (amount.value.substring(0, 1) === "-") {
      expense(intValue);
      enterDetails(details);
      transaction.push(details);
      localStorage.setItem("transaction", JSON.stringify(transaction));
      localStorage.setItem("id", JSON.stringify(id.current));
      text.value = "";
      amount.value = "";
    }
  };
  return (
    <Wrapper>
      <Heading>
        <h3>Add new Transaction</h3>
      </Heading>
      <Holder>
        <span className="text">Text</span>
        <input
          type="text"
          id="Text"
          className="input"
          placeholder="Enter Text"
        />
      </Holder>
      <Holder>
        <span className="amount">Amount</span>
        <span className="amountDetails">
          (negative-expense,positive-income)
        </span>
        <input
          type="text"
          id="Amount"
          className="input"
          placeholder="Enter Amount"
        />
      </Holder>
      <Holder>
        <input
          type="button"
          value="Add Transaction"
          id="btn"
          onClick={(e) => {
            handleTransaction(e);
          }}
        />
      </Holder>
    </Wrapper>
  );
};

export default Transaction;
