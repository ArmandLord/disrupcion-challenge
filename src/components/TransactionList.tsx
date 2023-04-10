import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.length === 0 ? (
          <p>No transactions</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </div>
  );
};
