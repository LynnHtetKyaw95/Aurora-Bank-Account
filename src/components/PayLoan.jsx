/* eslint-disable react/prop-types */
export default function PayLoan({ dispatch, payLoanValue, loan }) {
  return (
    <div className="flex gap-4">
      <input
        className="text-gray-700 font-number pl-4 rounded-md"
        type="number"
        value={payLoanValue === 0 ? "" : payLoanValue}
        onChange={(e) => {
          if (e.target.value < 0) return;

          dispatch({
            type: "pay_loan_value",
            payload: Number(e.target.value),
          });
        }}
      />
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-400"
        onClick={() => dispatch({ type: "pay_loan" })}
        disabled={!loan ? true : false}
      >
        Pay Loan
      </button>
      <button
        className={`bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
        onClick={() => dispatch({ type: "pay_loan_all" })}
        disabled={!loan ? true : false}
      >
        Pay Loan All
      </button>
    </div>
  );
}
