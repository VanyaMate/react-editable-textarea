import React from 'react';
import {ETA_ComponentInjectData} from "../interfaces/eta-components.interface";

export interface IETA_Span extends ETA_ComponentInjectData{}

const ETA_Span: React.FC<IETA_Span> = (props) => {
    return (
        <span data-eta-type={'__SPAN__'} data-eta-default={true}>
            { props.injected }
        </span>
    );
};

export default ETA_Span;