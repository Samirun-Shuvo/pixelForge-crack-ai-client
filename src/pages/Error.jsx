import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <Header></Header>
      <div className="flex min-h-screen items-center justify-center">
        Error : {Error}
      </div>
    </div>
  );
};

export default Error;
