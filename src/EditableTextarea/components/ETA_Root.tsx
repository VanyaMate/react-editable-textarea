import React from 'react';
import {ETA_ComponentInjectData} from "../interfaces/eta-components.interface";

export interface IETA_Root extends ETA_ComponentInjectData{}

const ETA_Root: React.FC<IETA_Root> = (props) => {
    return (
        <div data-eta-type={"__ROOT__"}>
            { props.injected }
        </div>
    );
};

export default ETA_Root;