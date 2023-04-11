export const Header = () => {
  const months = [
    "Febrero",
    "Enero",
    "Diciembre",
    "Noviembre",
    "Octubre",
    "Septiembre",
    "Agosto",
    "Julio",
    "Junio",
    "Mayo",
    "Abril",
    "Marzo",
  ];
  return (
    <header
      style={{
        background: "#4a65a3",
        border: "none",
      }}
      className="d-flex justify-content-between align-items-center p-3 mb-3 rounded-bottom-4"
    >
      {months.slice(0, 5).map((month, index) => {
        return (
          <h5
            key={index}
            style={{
              color: "white",
              fontSize: month === "Diciembre" ? "1rem" : ".7rem",
              fontWeight: month === "Diciembre" ? "bold" : "normal",
            }}
          >
            {month}
          </h5>
        );
      })}
    </header>
  );
};
