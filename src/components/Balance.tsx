import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div className="text-center mb-2">
        <h4 style={{ fontSize: "14px" }} className="fw-bolder">
          Balance del mes
        </h4>
        <h1 className="fw-bold" style={{ color: "#4a65a3" }}>
          ${total}
        </h1>
      </div>
    </>
  );
};
