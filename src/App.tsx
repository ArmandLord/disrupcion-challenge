import {
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </>
  );
};

export default App;
