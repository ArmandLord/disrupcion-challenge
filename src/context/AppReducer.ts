import { TransactionInterface } from "./GlobalState";

interface PropsReducer {
  payload: any;
  type: string;
}

export const AppReducer = (state: any, { payload, type }: PropsReducer) => {
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: TransactionInterface) => transaction.id !== payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    default:
      return state;
  }
};
