import { createContext, useReducer, PropsWithChildren } from "react";
import { AppReducer } from "./AppReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Types";
import {
  TransactionInterface,
  TypeGlobalContext,
  TypeInitialState,
} from "../interfaces/TransactionInterfaces";

// Initial State
const initialState: TypeInitialState = {
  transactions: [
    { id: 1, text: "Uber", amount: -97.63, old: false },
    { id: 2, text: "Transferencia Ana", amount: 103.47, old: false },
    { id: 3, text: "Netflix", amount: -105.2, old: false },
    // agreg propiedad old para mostrar transacciones anteriores
    { id: 4, text: "Regalo para Mariana", amount: -299.99, old: true },
    { id: 5, text: "Transferencia Gabriel", amount: 103.47, old: true },
    { id: 6, text: "Buffalo boneless", amount: -120.0, old: true },
    { id: 7, text: "Super", amount: 572.27, old: true },
  ],
};

// Create context
export const GlobalContext = createContext({} as TypeGlobalContext);

// Provider component
export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  }

  function addTransaction(transaction: TransactionInterface) {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
