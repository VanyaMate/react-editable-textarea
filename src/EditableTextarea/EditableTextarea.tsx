import React, {MutableRefObject} from 'react';
import {IEditableTextareaOptions} from "./hooks/useEditableTextarea.hook";

interface T {
}

const EditableTextarea: React.FC<IEditableTextareaOptions<T>> = React.forwardRef<HTMLDivElement, IEditableTextareaOptions<T>>((props, ref) => {
    return (
        <div ref={ref}>
            { props.structure }
        </div>
    );
});

export default React.memo(EditableTextarea);