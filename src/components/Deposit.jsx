/* eslint-disable react/prop-types */
export default function Deposit({ depositValue, dispatch }) {
  return (
    <div className="flex gap-4">
      <input
        className="text-gray-700 font-number pl-4 rounded-md"
        type="number"
        value={depositValue === 0 ? "" : depositValue}
        onChange={(e) => {
          if (e.target.value < 0) return;
          dispatch({
            type: "new_value",
            payload: Number(e.target.value),
          });
        }}
      />
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500"
        onClick={() => dispatch({ type: "deposit" })}
      >
        Deposit
      </button>
    </div>
  );
}
