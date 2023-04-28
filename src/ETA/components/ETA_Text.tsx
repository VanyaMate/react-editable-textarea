import React, {useContext} from 'react';
import {ETA_RedactScope} from "../context/ETA_RedactScope";

export interface IETA_Text {
    text: string,
}

const ETA_Text: React.FC<IETA_Text> = (props) => {
    const editable = useContext(ETA_RedactScope);

    return (
        <span
            eta-text={'__TEXT__'}
            contentEditable={editable}
            dangerouslySetInnerHTML={{__html: props.text}}
        />
    );
};

export default ETA_Text;