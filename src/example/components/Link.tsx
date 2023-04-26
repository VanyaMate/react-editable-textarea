import React from 'react';
import {ETA_ComponentInjectData} from "../../EditableTextarea/interfaces/eta-components.interface";

export interface ILink extends ETA_ComponentInjectData {
    url: string,
}

const Link: React.FC<ILink> = (props) => {
    return (
        <span data-eta-type={props.type} data-eta-name={props.name}>
            <a data-eta-attribute={'href:url'} href={props.url}>{ props.injected }</a>
        </span>
    );
};

export default Link;