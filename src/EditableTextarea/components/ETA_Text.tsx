import React, {useContext} from 'react';
import {ETA_EditContext} from "../context/ETA_EditContext";
import {ETA_ComponentInjectData} from "../interfaces/eta-components.interface";

interface IETA_Text extends ETA_ComponentInjectData{
    text: string,
}

const ETA_Text: React.FC<IETA_Text> = (props) => {
    const editMode = useContext<boolean>(ETA_EditContext);

    return (
        <div
            data-eta-type={'__TEXT__'}
            contentEditable={editMode}
            dangerouslySetInnerHTML={{ __html: props.text }}
        />
    );
};

export default React.memo(ETA_Text);