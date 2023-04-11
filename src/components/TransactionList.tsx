import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  if (transactions.length === 0) {
    return <p>No transactions</p>;
  }

  return (
    <div
      style={{
        marginBottom: "5rem",
      }}
    >
      <h3>History</h3>
      <ul className="list-unstyled">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
