import { PropsWithChildren } from "react";

export const ContainerApp = ({ children }: PropsWithChildren) => {
  return (
    <div className="container vh-100 ">
      <div className="row justify-content-center align-items-center">
        <div
          style={{
            position: "relative",
          }}
          className="col-md-4 bg-secondary"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
