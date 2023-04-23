import React from 'react';
import EditableTextareaPoint from "../EditableTextarea/components/EditableTextareaPoint";
import {IUseEditableComponentProps, useEditableComponent} from "../EditableTextarea/hooks/useEditableComponent.hook";

interface Link {
    url: string,
}

const Link: React.FC<Link> = (props) => {
    const [ref, { text }] = useEditableComponent({ text: props.url })

    return (
        <div onClick={() => console.log('Link to', text.get())}>
            <EditableTextareaPoint text={props.url} ref={ref}/>
        </div>
    );
};

export default Link;