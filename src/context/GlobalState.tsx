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
    { id: 1, text: "Uber", amount: -97.63 },
    { id: 2, text: "Transferencia Ana", amount: 103.47 },
    { id: 3, text: "Netflix", amount: -105.2 },
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
