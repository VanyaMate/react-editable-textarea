import React from 'react';
import {ETA_ComponentInjectData} from "../../EditableTextarea/interfaces/eta-components.interface";
import ETA_Text from "../../EditableTextarea/components/ETA_Text";
import ETA_Middleware from "../../EditableTextarea/components/ETA_Middleware";

export interface IList extends ETA_ComponentInjectData{
    list: string[],
}

const List: React.FC<IList> = (props) => {
    return (
        <div data-eta-type={"LIST"}>
            { props.list.map((row, index) => <ETA_Middleware key={index} content={row} components={props.components} type={'__ROOT__'}/>) }
        </div>
    );
};

export default List;