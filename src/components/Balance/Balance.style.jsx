import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5px;

  @media screen and (max-width: 798px) {
    width: 100%;
  }

  @media screen and (max-width: 1125px) and (min-width: 800px) {
    margin-left: -40px;
  }
`;

export const BalanceAmount = styled.div`
  margin-bottom: 15px;

  .balance {
    font-size: 1.2rem;
    display: block;
    font-weight: bold;
    text-transform: uppercase;
  }

  .balanceh3 {
    font-size: 1.1rem;
    font-weight: bold;
    padding-left: 3px;
  }
`;

export const IncomeExpense = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 80px;
  border-radius: 3px;
  background: #fff;
  box-shadow: -1px 0 5px rgba(0, 0, 0, 0.45);

  @media screen and (max-width: 798px) {
    width: 100%;
  }
`;

export const Income = styled.div`
  margin-left: 50px;
  position: relative;
  background: #fff;

  .income {
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    background: #fff;
  }

  .h4income {
    display: flex;
    justify-content: center;
    font-size: 1.15rem;
    background: #fff;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: -35px;
    border-right: 2px solid rgba(0, 0, 0, 0.15);
    height: 100%;

    @media screen and (max-width: 798px) {
      right: -45px;
    }

    @media screen and (max-width: 411px) and (min-width: 321px) {
      right: -50px;
    }

    @media screen and (max-width: 320px) and (min-width: 279px) {
      right: -30px;
    }

    @media screen and (max-width: 1024px) and (min-width: 799px) {
      right: -20px;
    }

    @media screen and (max-width: 280px) and (min-width: 100px) {
      right: -17px;
    }
  }

  @media screen and (max-width: 1110px) {
    margin-left: 20px;
  }
`;

export const Expense = styled.div`
  margin-right: 50px;
  background: #fff;

  .expense {
    background: #fff;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .h4expense {
    display: flex;
    justify-content: center;
    font-size: 1.15rem;
    background: #fff;
  }

  @media screen and (max-width: 1110px) {
    margin-right: 20px;
  }
`;
