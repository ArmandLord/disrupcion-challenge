import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useAddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return {
    text,
    amount,
    setText,
    setAmount,
    onSubmit,
  };
};
