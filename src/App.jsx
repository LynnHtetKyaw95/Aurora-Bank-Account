import { useEffect, useReducer } from "react";
import AccountBalance from "./components/AccountBalance";
import OpenAccount from "./components/OpenAccount";
import Title from "./components/Title";
import Deposit from "./components/Deposit";
import Withdrawal from "./components/Withdrawal";
import RequestedLoan from "./components/RequestedLoan";
import PayLoan from "./components/PayLoan";
import ClossAccount from "./components/ClossAccount";
import Footer from "./components/Footer";

const initailState = {
  balance: 0,
  loan: 0,
  depositValue: "",
  withdrawalValue: "",
  loanValue: "",
  payLoanValue: "",
  notification: "",
  isActive: false,
};

const REDUCER_ACTION = {
  OPEN_ACC: "openAccount",
  NEW_VALUE: "new_value",
  DEPOSIT: "deposit",
  WITHDRAWAL_VALUE: "withdrawal_value",
  WITHDRAWAL: "withdrawal",
  WITHDRAWAL_ALL: "withdrawal_all",
  NEW_LOAN: "new_loan",
  REQUEST_LOAN: "request_loan",
  PAY_LOAN_VALUE: "pay_loan_value",
  PAY_LOAN: "pay_loan",
  PAY_LOAN_ALL: "pay_loan_all",
  NOTIFICATION: "notification",
  CLOSE_ACC: "closeAccount",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initailState);

  const {
    balance,
    loan,
    depositValue,
    withdrawalValue,
    loanValue,
    payLoanValue,
    notification,
    isActive,
  } = state;

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: "notification", payload: null });
    }, 2000);
    return () => clearInterval(id);
  }, [notification]);

  function reducer(state, action) {
    switch (action.type) {
      case REDUCER_ACTION.OPEN_ACC:
        return { ...state, balance: state.balance + 100, isActive: true };
      case REDUCER_ACTION.NEW_VALUE:
        return { ...state, depositValue: action.payload };
      case REDUCER_ACTION.DEPOSIT:
        return {
          ...state,
          balance: state.balance + state.depositValue,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };
      case REDUCER_ACTION.WITHDRAWAL_VALUE:
        return { ...state, withdrawalValue: action.payload };
      case REDUCER_ACTION.WITHDRAWAL:
        if (state.withdrawalValue > state.balance) return state;
        return {
          ...state,
          balance: state.balance - state.withdrawalValue,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };

      case REDUCER_ACTION.WITHDRAWAL_ALL:
        if (state.balance === 0) return;
        return {
          ...state,
          balance: state.balance - state.balance,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };
      case REDUCER_ACTION.NEW_LOAN:
        return { ...state, loanValue: action.payload };
      case REDUCER_ACTION.REQUEST_LOAN:
        return {
          ...state,
          balance: state.balance + state.loanValue,
          loan: state.loanValue,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };
      case REDUCER_ACTION.PAY_LOAN_VALUE:
        return { ...state, payLoanValue: action.payload };
      case REDUCER_ACTION.PAY_LOAN:
        return {
          ...state,
          loan: state.loan - state.payLoanValue,
          balance: state.balance - state.payLoanValue,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };
      case REDUCER_ACTION.PAY_LOAN_ALL:
        return {
          ...state,
          loan: state.loan - state.loan,
          balance: state.balance - state.loan,
          depositValue: "",
          withdrawalValue: "",
          loanValue: "",
          payLoanValue: "",
        };
      case REDUCER_ACTION.NOTIFICATION:
        return { ...state, notification: action.payload };
      case REDUCER_ACTION.CLOSE_ACC: {
        return {
          ...initailState,
        };
      }
      default:
        throw new Error("Unknown Action");
    }
  }

  return (
    <>
      <div className="h-[90vh] bg-gray-700 flex flex-col items-center pt-20 font-body text-gray-100 gap-6">
        <Title />
        <AccountBalance balance={balance} loan={loan} />

        {!isActive ? <OpenAccount dispatch={dispatch} /> : null}

        {isActive ? (
          <Deposit depositValue={depositValue} dispatch={dispatch} />
        ) : null}

        {isActive ? (
          <Withdrawal
            withdrawalValue={withdrawalValue}
            dispatch={dispatch}
            balance={balance}
          />
        ) : null}

        {isActive ? (
          <RequestedLoan
            loan={loan}
            loanValue={loanValue}
            dispatch={dispatch}
          />
        ) : null}

        {isActive ? (
          <PayLoan
            dispatch={dispatch}
            payLoanValue={payLoanValue}
            loan={loan}
          />
        ) : null}

        {isActive ? (
          <ClossAccount
            dispatch={dispatch}
            balance={balance}
            loan={loan}
            notification={notification}
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
}
