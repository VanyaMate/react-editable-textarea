import React from 'react';
import {IEditableTextareaOptions} from "./hooks/useEditableTextarea.hook";
import EditableTextareaPoint from "./components/EditableTextareaPoint";
import {EditContext} from './context/EditContext';
import Link from "../components/Link";

/**
 *  Основной стартовый компонент
 */
const EditableTextarea: React.FC<IEditableTextareaOptions> = React.forwardRef<HTMLDivElement, IEditableTextareaOptions>((props, ref) => {
    console.log('Edit', props.edit.value)

    return (
        <EditContext.Provider value={props.edit.value}>
            <div ref={ref}>
                <Link url={'vk.com'}/>
            </div>
        </EditContext.Provider>
    );
});

export default React.memo(EditableTextarea);