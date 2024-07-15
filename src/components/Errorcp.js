import { useRouteError } from "react-router-dom";

const Errorcp = () => {
  const err = useRouteError();
console.log(err);
  return (
    <div>
      <h1>This is Error page!!</h1>
      <h2>{err.status} - {err.statusText}</h2>

    </div>
  );
};

export default Errorcp;
