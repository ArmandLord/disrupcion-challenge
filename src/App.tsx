import {
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
};

export default App;
