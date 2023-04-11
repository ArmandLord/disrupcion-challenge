import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <div className="text-center">
          <h4
            style={{ fontSize: "12px" }}
            className="m-0 fw-normal text-success"
          >
            Ingresos
          </h4>
          <p className="fs-4 fw-bold text-success">+${income}</p>
        </div>
        <div className="border-start" style={{ height: "50px" }}></div>
        <div className="text-center">
          <h4
            style={{ fontSize: "12px" }}
            className="m-0 fw-normal text-danger"
          >
            Gastos
          </h4>
          <p className="fs-4 fw-bold text-danger">-${expense}</p>
        </div>
      </div>
      <div
        style={{ fontSize: "12px" }}
        className="d-flex flex-column align-items-center text-secondary"
      >
        <small>Ver analiticas</small>
        <FontAwesomeIcon icon="chevron-down" />
      </div>
    </div>
  );
};
