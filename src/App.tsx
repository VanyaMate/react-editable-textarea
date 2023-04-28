import React from "react";
import {useEta} from "./ETA/hooks/useEta";

const App = () => {
    const [eta, methods] = useEta({
        editMode: false,
        text: 'string',
    })

    return (
        <div>
            { eta }
        </div>
    );
};

export default App;
