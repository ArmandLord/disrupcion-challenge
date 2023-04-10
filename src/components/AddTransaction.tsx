import { useAddTransaction } from "../hooks/useAddTransaction";

export const AddTransaction = () => {
  const { text, amount, setText, setAmount, onSubmit } = useAddTransaction();
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(event) => setAmount(+event.target.value)}
          />
        </div>
        <button className="btn btn-primary">Add transaction</button>
      </form>
    </div>
  );
};
