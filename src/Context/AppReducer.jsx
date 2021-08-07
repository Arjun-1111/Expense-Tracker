export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME": {
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
        totalIncome: state.totalIncome + action.payload,
      };
    }
    case "SUBTRACT_EXPENSE": {
      return {
        ...state,
        totalAmount: state.totalAmount - -action.payload,
        totalExpense: state.totalExpense + -action.payload,
      };
    }
    case "DETAILS": {
      return {
        ...state,
        details: [action.payload, ...state.details],
      };
    }
    case "DELETE": {
      return {
        ...state,
        details: state.details.filter((detail) => detail.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
