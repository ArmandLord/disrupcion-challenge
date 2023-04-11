import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Swal from "sweetalert2";

export const useAddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    if (newTransaction.text === "" || newTransaction.amount === 0) {
      Swal.fire("Error", "Por favor, ingrese un texto y un monto", "error");
      return;
    }
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setOpenModal(false);
  };

  return {
    text,
    amount,
    openModal,
    setText,
    setAmount,
    onSubmit,
    setOpenModal,
  };
};
