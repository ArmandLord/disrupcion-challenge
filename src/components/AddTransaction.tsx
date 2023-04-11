import { useAddTransaction } from "../hooks/useAddTransaction";

export const AddTransaction = () => {
  const {
    text,
    amount,
    openModal,
    setText,
    setAmount,
    onSubmit,
    setOpenModal,
  } = useAddTransaction();

  return (
    <div>
      <button
        className="btn btn-primary shadow"
        style={{
          width: "60%",
          padding: ".6rem",
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: openModal ? "none" : "block",
          background: "#4a65a3",
          border: "none",
        }}
        onClick={() => setOpenModal(true)}
      >
        Agregar Movimiento
      </button>

      <section
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: openModal ? "block" : "none",
        }}
        className="bg-white p-3 rounded-2 shadow"
      >
        <form onSubmit={onSubmit} className="d-flex flex-column gap-2">
          <h3
            className="text-center fs-6 fw-bold m-0"
            style={{
              color: "#4a65a3",
            }}
          >
            Agrega una transacción
          </h3>
          <hr
            style={{
              background: "#4a65a3",
              marginTop: "7px",
              height: "2px",
              border: "none",
            }}
          />
          <div>
            <label htmlFor="text" className="text-secondary">
              Descripción
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Uber, Netflix, etc..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="amount" className="text-secondary">
              Monto:
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(event) => setAmount(+event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              style={{
                background: "#4a65a3",
                border: "none",
              }}
              className="btn btn-primary"
            >
              Agregar transacción
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
