import React from 'react';
import {EditContent} from "./context/EditContent";

export interface IEditableTextarea {
    data: string,
    edit: boolean,
}

const EditableTextarea: React.FC<IEditableTextarea> = React.forwardRef<HTMLDivElement, IEditableTextarea>((props, ref) => {


    return (
        <EditContent.Provider value={props.edit}>

        </EditContent.Provider>
    );
});

export default React.memo(EditableTextarea);