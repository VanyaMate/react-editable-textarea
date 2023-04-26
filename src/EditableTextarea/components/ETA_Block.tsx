import React from 'react';
import {ETA_ComponentInjectData} from "../interfaces/eta-components.interface";

export interface IETA_Block extends ETA_ComponentInjectData{}

const ETA_Block: React.FC<IETA_Block> = (props) => {
    return (
        <div data-eta-type={'__BLOCK__'} data-eta-default={true}>
            { props.injected }
        </div>
    );
};

export default ETA_Block;