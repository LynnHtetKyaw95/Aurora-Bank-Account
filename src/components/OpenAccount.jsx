/* eslint-disable react/prop-types */
export default function OpenAccount({ dispatch }) {
  return (
    <>
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open Account
      </button>
    </>
  );
}
