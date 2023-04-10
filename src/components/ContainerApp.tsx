import { PropsWithChildren } from "react";

export const ContainerApp = ({ children }: PropsWithChildren) => {
  return (
    <div className="container vh-100 bg-primary">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 bg-secondary">{children}</div>
      </div>
    </div>
  );
};
