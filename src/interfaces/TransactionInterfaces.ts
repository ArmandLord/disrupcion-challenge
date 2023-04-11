export interface TransactionInterface {
  id: number;
  text: string;
  amount: number;
  old?: boolean;
}

export interface TypeInitialState {
  transactions: TransactionInterface[];
}

export interface TypeGlobalContext {
  transactions: TransactionInterface[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionInterface) => void;
}
