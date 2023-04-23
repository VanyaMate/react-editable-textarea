import React, {useContext} from 'react';
import {EditContext} from "../context/EditContext";

export interface IEditableTextareaPoint {
    text: string,
}

/**
 *
 *  Компонент для редактирования текста внутри компонентов
 *
 */
const EditableTextareaPoint: React.FC<IEditableTextareaPoint> = React.forwardRef<HTMLDivElement, IEditableTextareaPoint>((props, ref) => {
    const edit = useContext<boolean>(EditContext);

    return (
        <div
            ref={ref}
            contentEditable={ edit }
            dangerouslySetInnerHTML={{ __html: props.text }}
        />
    );
});

export default React.memo(EditableTextareaPoint);