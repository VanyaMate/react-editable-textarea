import React from 'react';
import {IETA_Structure} from "../interfaces/IETA_Structure";
import {useEtaMiddleware} from "../hooks/useEtaMiddleware";

const ETA_Middleware: React.FC<IETA_Structure> = (props) => {
    const Component = useEtaMiddleware(props);
    return Component;
};

export default ETA_Middleware;