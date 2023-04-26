import React, {useState} from 'react';
import {ETA_ComponentInjectData} from "../../EditableTextarea/interfaces/eta-components.interface";
import ETA_Text from "../../EditableTextarea/components/ETA_Text";
import ETA_Middleware from "../../EditableTextarea/components/ETA_Middleware";
import ListRow from "./ListRow";

export interface IList extends ETA_ComponentInjectData{
    list: string[],
}

const List: React.FC<IList> = (props) => {
    const [list, setList] = useState(props.list);

    const addOneMoreRow = function () {
        setList([...list, 'qq']);
    }

    return (
        <div data-eta-type={props.type} data-eta-save-type={'props:list:LIST_ROW'} data-eta-name={props.name}>
            <h1>List of</h1><button onClick={() => addOneMoreRow()}>Add row</button>
            { list.map((row, index) => <ETA_Middleware key={index} content={row} components={props.components} type={"LIST_ROW"}/>) }
        </div>
    );
};

export default List;