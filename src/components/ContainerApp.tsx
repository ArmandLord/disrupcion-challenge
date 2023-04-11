import { PropsWithChildren } from "react";

export const ContainerApp = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        position: "relative",
      }}
      className="container vh-100 "
    >
      <div className="row justify-content-center align-items-center">
        <div
          style={{
            background: "#f5f5f5",
          }}
          className="col-md-4 shadow rounded-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
