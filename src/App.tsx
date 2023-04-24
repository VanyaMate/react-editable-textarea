import React, {useState} from "react";
import EditableTextarea from "./EditableTextarea/EditableTextarea";
import {useEditableTextarea} from "./EditableTextarea/hooks/useEditableTextarea.hook";
import {data} from "./Example/editable-textarea-posts.data";
import {EditablePostComponents} from "./Example/editable-textarea-posts.components";

const App = () => {
    const [root, methods] = useEditableTextarea({
        edit: false,
        data: data,
        components: EditablePostComponents,
    });

    /**
     *
     *     const [root, methods] = useEditableTextarea({
     *         edit: false,
     *         data: 'initialize text',
     *         components: EditablePostComponents,
     *     });
     *
     */

    return (
        <div>
            <button onClick={() => methods.toggleEdit()}>Toggle</button>
            <EditableTextarea root={root}/>
            <button onClick={() => methods.getState()}>Get</button>
        </div>
    );
};

export default App;
