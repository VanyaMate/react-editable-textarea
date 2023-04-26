import React from 'react';
import {ETA_ComponentInjectData} from "../../EditableTextarea/interfaces/eta-components.interface";

export interface IListRow extends ETA_ComponentInjectData {

}

const ListRow: React.FC<IListRow> = (props) => {
    return (
        <span data-eta-type={props.type}>
            { props.injected }
        </span>
    );
};

export default ListRow;