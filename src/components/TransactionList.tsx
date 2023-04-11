import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { TypeInitialState } from "../interfaces/TransactionInterfaces";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const oldTransactions: TypeInitialState = {
    transactions: [
      { id: 1, text: "Regalo para Mariana", amount: -299.99 },
      { id: 2, text: "Transferencia Gabriel", amount: 103.47 },
      { id: 3, text: "Buffalo boneless", amount: -120.0 },
      { id: 4, text: "Super", amount: 572.27 },
    ],
  };

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
      <ul className="list-unstyled">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <small className="fw-bold">Ayer - 5 Dic.</small>
      <ul className="list-unstyled">
        {oldTransactions.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
