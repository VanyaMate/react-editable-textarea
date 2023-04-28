import React, {useContext, useState} from 'react';
import {IETA_Structure} from "../interfaces/IETA_Structure";
import {useEtaMiddleware} from "../hooks/useEtaMiddleware";
import {ETA_RedactScope} from "../context/ETA_RedactScope";
import ETA_Editor from "./ETA_Editor";

const ETA_Middleware: React.FC<IETA_Structure> = (props) => {
    const [localEditMode, setLocalEditMode] = useState<boolean>(false);
    const Component = useEtaMiddleware(props);
    const editMode = useContext(ETA_RedactScope);

    return (
        <ETA_RedactScope.Provider value={localEditMode}>
            <div>
                { editMode ? <ETA_Editor/> : <></> }
                { Component }
            </div>
        </ETA_RedactScope.Provider>
    )
};

export default ETA_Middleware;