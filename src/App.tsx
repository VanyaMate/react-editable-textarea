import React from "react";
import {useEditableTextarea} from "./EditableTextarea/hooks/useEditableTextarea.hook";
import EditableTextarea from "./EditableTextarea/EditableTextarea";
import {EditableComponents} from "./EditableTextarea/editable-components.config";

const App = () => {
    const [ref, options] = useEditableTextarea<EditableComponents>({ value: 'text', edit: false });

    return (
        <div>
            <input value={options.value.get()} onChange={(e) => options.value.set(e.target.value)}/>
            <button onClick={() => options.edit.set(!options.edit.value)}>ToggleEditMod</button>
            <EditableTextarea ref={ref} {...options}/>
            <button onClick={() => console.log(options.value.get(), ref.current?.textContent)}>Get</button>
        </div>
    );
};

export default App;
