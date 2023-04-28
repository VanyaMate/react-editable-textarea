import React, {useContext} from 'react';
import {ETA_RedactScope} from "../context/ETA_RedactScope";

export interface IETA_Editor {
    toggleMode: (mode: (prev: boolean) => boolean) => void,
}

const ETA_Editor: React.FC<IETA_Editor> = (props) => {
    const editable = useContext(ETA_RedactScope);

    return (
        <div onClick={() => props.toggleMode(p => !p)}>
            ETA_Editor { [ editable.toString() ]}
        </div>
    );
};

export default ETA_Editor;