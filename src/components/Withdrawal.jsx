/* eslint-disable react/prop-types */
export default function Withdrawal({ withdrawalValue, dispatch, balance }) {
  return (
    <div className="flex gap-4">
      <input
        className="text-gray-700 font-number pl-4 rounded-md"
        type="number"
        value={withdrawalValue === 0 ? "" : withdrawalValue}
        onChange={(e) => {
          if (e.target.value < 0) return;

          dispatch({
            type: "withdrawal_value",
            payload: Number(e.target.value),
          });
        }}
      />
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-400"
        onClick={() => dispatch({ type: "withdrawal" })}
        disabled={balance === 0 ? true : false}
      >
        Withdrawal
      </button>
      <button
        className={`bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
        onClick={() => dispatch({ type: "withdrawal_all" })}
        disabled={balance === 0 ? true : false}
      >
        Withdrawal All
      </button>
    </div>
  );
}
