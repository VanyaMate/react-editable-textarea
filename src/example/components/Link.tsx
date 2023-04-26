import React from 'react';
import {ETA_ComponentInjectData} from "../../EditableTextarea/interfaces/eta-components.interface";

export interface ILink extends ETA_ComponentInjectData {
    url: string,
}

const Link: React.FC<ILink> = (props) => {
    return (
        <div data-eta-type={'LINK'}>
            <a href={props.url}>{ props.injected }</a>
        </div>
    );
};

export default Link;