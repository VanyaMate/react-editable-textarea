import React from 'react';
import {IEditableTextareaOptions} from "./hooks/useEditableTextarea.hook";


const EditableTextarea: React.FC<IEditableTextareaOptions> = React.forwardRef<HTMLDivElement, IEditableTextareaOptions>((props, ref) => {
    return (
        <div ref={ref}>
            { props.structure.struct }
        </div>
    );
});

export default React.memo(EditableTextarea);