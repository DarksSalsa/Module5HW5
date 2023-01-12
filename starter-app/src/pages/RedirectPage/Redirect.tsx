import React, { ReactElement, FC } from "react";
import { Navigate } from "react-router-dom";


const Redirect: FC<any> = (): ReactElement => {
    return (<Navigate to = {`/users/`}/>)
}

export default Redirect;