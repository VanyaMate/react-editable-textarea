import React from "react";
import {useEditableTextarea} from "./EditableTextarea/hooks/useEditableTextarea.hook";
import EditableTextarea from "./EditableTextarea/EditableTextarea";
import {EditableComponents} from "./EditableTextarea/editable-components.config";

const App = () => {
    const [ref, options] = useEditableTextarea<EditableComponents>({ value: 'text', edit: true });

    return (
        <div>
            <input value={options.value.get()} onChange={(e) => options.value.set(e.target.value)}/>
            <EditableTextarea ref={ref} {...options}/>
            <button onClick={() => console.log(options.value.get(), ref.current?.textContent)}>Get</button>
        </div>
    );
};

export default App;
