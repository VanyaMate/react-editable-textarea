import React from "react";
import {useEta} from "./ETA/hooks/useEta";

const App = () => {
    const [eta, methods] = useEta({
        editMode: false,
        text: 'string'
    })

    return (
        <div>
            <button onClick={() => console.log(methods.getString())}>getString</button>
            <button onClick={() => console.log(methods.toggleEditMode())}>getString</button>
            <button onClick={() => console.log(methods.getEditMode())}>getString</button>
            { eta }
        </div>
    );
};

export default App;
