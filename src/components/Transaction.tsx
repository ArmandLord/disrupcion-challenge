import { FC, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
}

export const Transaction: FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { text, amount } = transaction;
  const sing: string = amount < 0 ? "-" : "+";

  return (
    <li className="bg-white p-2 d-flex justify-content-between align-items-center shadow-sm rounded-2 mb-2">
      <span className="d-flex align-items-center justify-content-between">
        <FontAwesomeIcon
          icon={amount > 0 ? "circle" : "square"}
          style={{
            color: amount < 0 ? "rgb(255,137,141)" : "rgb(116, 214, 142)",
            fontSize: "2rem",
            marginRight: ".5rem",
          }}
        />
        <p style={{ fontSize: "12px" }} className="mb-0 fw-bold">
          {text}
        </p>
      </span>
      <section>
        <span
          className={
            amount < 0 ? "text-danger fw-bold" : "text-success fw-bold"
          }
        >
          {sing}${Math.abs(amount)}
        </span>
        <button
          className="btn btn-sm ms-2"
          onClick={() => deleteTransaction(transaction.id)}
        >
          <FontAwesomeIcon className="text-danger" icon="xmark" />
        </button>
      </section>
    </li>
  );
};
