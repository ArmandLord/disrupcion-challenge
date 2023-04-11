import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  if (transactions.length === 0) {
    return (
      <div className="card p-3 shadow-sm rounded-4 mb-5 text-center">
        <p>Sin transacciones recientes</p>
      </div>
    );
  }

  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
    >
      <small className="fw-bold">Hoy - 6 Dic.</small>
      {!transactions.some((transaction) => !transaction.old) && (
        <div className="card p-3 shadow-sm rounded-4 mb-5 text-center">
          <p>Sin transacciones recientes</p>
        </div>
      )}
      <ul className="list-unstyled">
        {transactions.map(
          (transaction) =>
            !transaction.old && (
              <Transaction key={transaction.id} transaction={transaction} />
            )
        )}
      </ul>
      {transactions.some((transaction) => transaction.old) && (
        <small className="fw-bold">Ayer - 5 Dic.</small>
      )}
      <ul className="list-unstyled">
        {transactions.map(
          (transaction) =>
            transaction.old && (
              <Transaction key={transaction.id} transaction={transaction} />
            )
        )}
      </ul>
    </div>
  );
};
