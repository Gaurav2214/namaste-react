import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-page">
            <h2>Opsss!!</h2>
            <h2>{err.status} : {err?.data}</h2>
        </div>
    )
}

export default Error;