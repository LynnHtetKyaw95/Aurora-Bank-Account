/* eslint-disable react/prop-types */
export default function AccountBalance({ balance, loan }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="flex items-center gap-2 uppercase">
        Balance:
        <span className="font-bold text-2xl font-number">${balance}</span>
      </p>
      <p className="flex items-center gap-2 uppercase">
        Loan: <span className="font-bold text-2xl font-number">${loan}</span>
      </p>
    </div>
  );
}
