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
import {
  faArrowUp,
  faArrowDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <GlobalProvider>
      <ContainerApp>
        <Header />
        <div className="card p-3 shadow-sm rounded-4">
          <Balance />
          <IncomeExpenses />
        </div>
        <TransactionList />
        <AddTransaction />
      </ContainerApp>
    </GlobalProvider>
  );
};

library.add(faArrowUp, faArrowDown, faChevronDown);
export default App;
