import { FC, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

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
    <li>
      {text}{" "}
      <span
        //   que sea rojo si es negativo o verde si es positivo usando bootstrap
        className={amount < 0 ? "text-danger" : "text-success"}
      >
        {sing}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
