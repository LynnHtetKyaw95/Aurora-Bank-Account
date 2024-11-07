/* eslint-disable react/prop-types */
export default function ClossAccount({
  dispatch,
  loan,
  balance,
  notification,
}) {
  return (
    <>
      <button
        className="bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500"
        onClick={() => {
          if (balance > 0 || loan > 0) {
            dispatch({
              type: "notification",
              payload:
                "Your balance and loan must be 0. Please withdrawal all your money / pay all loan",
            });
          } else {
            dispatch({ type: "closeAccount" });
          }
        }}
      >
        Close Account
      </button>
      <p className="text-red-300 text-xl">{notification}</p>
    </>
  );
}
