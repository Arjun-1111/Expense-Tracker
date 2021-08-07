import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  totalAmount: 0,
  details: [],
  totalIncome: 0,
  totalExpense: 0,
};

// create context

export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = ({ children }) => {
  // create reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   actions
  const income = (data) => {
    dispatch({
      type: "ADD_INCOME",
      payload: data,
    });
  };

  const expense = (data) => {
    dispatch({
      type: "SUBTRACT_EXPENSE",
      payload: data,
    });
  };

  const enterDetails = (data) => {
    dispatch({
      type: "DETAILS",
      payload: data,
    });
  };

  const Delete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  useEffect(() => {
    let totalTransations = [];
    if (localStorage.getItem("transaction") !== null)
      totalTransations = JSON.parse(localStorage.getItem("transaction"));
    let totalIncome = totalTransations
      .filter((transaction) => transaction.value > 0)
      .reduce((total, t1) => total + t1.value, 0);
    let totalExpense = totalTransations
      .filter((transaction) => transaction.value < 0)
      .reduce((total, t1) => total + t1.value, 0);
    totalTransations.map((transaction) => enterDetails(transaction));
    income(totalIncome);
    expense(+totalExpense);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        totalAmount: state.totalAmount,
        income,
        expense,
        enterDetails,
        Delete,
        details: state.details,
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
