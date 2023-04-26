import React from 'react';
import {IETA_Data_middleware} from "../interfaces/eta-data.interface";
import {useETAMiddleware} from "../hooks/useETAMiddleware";

const ETA_Middleware: React.FC<IETA_Data_middleware> = (props) => {
    const components: JSX.Element = useETAMiddleware(props);
    return <> { components } </>
};

export default ETA_Middleware;