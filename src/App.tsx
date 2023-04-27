import React from "react";
import ETA from "./EditableTextarea/ETA";
import {PostsComponents} from "./example/posts.components";

const App = () => {
    return (
        <div>
            <ETA editMod={true} componentsList={PostsComponents} data={'string'}/>
        </div>
    );
};

export default App;
