import { TransactionInterface, TypeInitialState } from "./GlobalState";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Types";

interface PropsReducer {
  payload: any;
  type: string;
}

export const AppReducer = (
  state: TypeInitialState,
  { payload, type }: PropsReducer
) => {
  switch (type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: TransactionInterface) => transaction.id !== payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    default:
      return state;
  }
};
