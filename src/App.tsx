import React from "react";
import ETA from "./EditableTextarea/ETA";
import {PostsComponents} from "./example/posts.components";
import {data} from "./example/posts.data";

const App = () => {
    return (
        <div>
            <ETA editMod={false} componentsList={PostsComponents} data={data}/>
        </div>
    );
};

export default App;
