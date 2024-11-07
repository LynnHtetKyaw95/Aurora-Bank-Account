/* eslint-disable react/prop-types */
export default function RequestedLoan({ dispatch, loanValue, loan }) {
  return (
    <div className="flex gap-4">
      <input
        className="text-gray-700 font-number pl-4 rounded-md"
        type="number"
        value={loanValue === 0 ? "" : loanValue}
        onChange={(e) => {
          if (e.target.value < 0) return;
          dispatch({
            type: "new_loan",
            payload: Number(e.target.value),
          });
        }}
      />
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={loan ? true : false}
        onClick={() => dispatch({ type: "request_loan" })}
      >
        Request Loan
      </button>
    </div>
  );
}
