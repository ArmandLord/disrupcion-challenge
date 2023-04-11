import {
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
  ContainerApp,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <GlobalProvider>
      <ContainerApp>
        <Header />
        <div className="card p-3 shadow-sm rounded-4 mb-3">
          <Balance />
          <IncomeExpenses />
        </div>
        <TransactionList />
        <AddTransaction />
      </ContainerApp>
    </GlobalProvider>
  );
};

library.add(faChevronDown, faXmark);
export default App;
