import React from 'react';
import {ETA_EditContext} from './context/ETA_EditContext';
import {ETA_ComponentsList} from "./context/ETA_ComponentsList";
import {IETA_Components} from "./interfaces/eta-components.interface";
import ETA_Middleware from "./components/ETA_Middleware";
import {IETA_Data} from "./interfaces/eta-data.interface";
import ETA_Text from "./components/ETA_Text";

export interface IETA {
    editMod: boolean,
    componentsList: IETA_Components,
    data: IETA_Data | string,
}

const ETA: React.FC<IETA> = (props) => {
    return (
        <ETA_EditContext.Provider value={props.editMod}>
            <ETA_ComponentsList.Provider value={props.componentsList}>
                {
                    typeof props.data === 'string'
                        ? <ETA_Text text={props.data}/>
                        : <ETA_Middleware {...props.data}/>
                }
            </ETA_ComponentsList.Provider>
        </ETA_EditContext.Provider>
    );
};

export default React.memo(ETA);