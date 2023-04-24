import React from 'react';

export interface IEditableTextarea {
    data: string,
    edit: boolean,
}

const EditableTextarea: React.FC<IEditableTextarea> = React.forwardRef<HTMLDivElement, IEditableTextarea>((props, ref) => {
    return <div>QQQ</div>
});

export default React.memo(EditableTextarea);