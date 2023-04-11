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
      <p className="mb-0">{text}</p>
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
