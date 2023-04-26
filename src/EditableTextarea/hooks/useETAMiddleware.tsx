import {ETA_Data_props, IETA_Data, IETA_Data_middleware} from "../interfaces/eta-data.interface";
import {IETA_Components} from "../interfaces/eta-components.interface";
import React, {useContext} from "react";
import {ETA_ComponentsList} from "../context/ETA_ComponentsList";
import {ETA_Default} from "../eta.components";
import ETA_Middleware from "../components/ETA_Middleware";
import ETA_Text from "../components/ETA_Text";

const componentSplitFormat = /%%(.*?)%%/g;

export const useETAMiddleware = function (data: IETA_Data_middleware): JSX.Element {
    const splitText: string[] = data.content.split(componentSplitFormat);
    const userComponents = useContext<IETA_Components>(ETA_ComponentsList);
    const components: JSX.Element[] = [];
    const CurrentComponent = ETA_Default[data.type] || userComponents[data.type] || ETA_Default['__TEXT__'];

    if (CurrentComponent !== ETA_Default['__TEXT__']) {
        for (let i = 0; i < splitText.length; i++) {
            const componentName = splitText[i];
            const component = data.components[componentName];

            if (!!component) {
                const DefaultComponent = ETA_Default[component.type];
                const UserComponent = userComponents[component.type];

                if (!!DefaultComponent || !!UserComponent) {
                    components.push(<ETA_Middleware key={i} {...component} name={componentName}/>);
                } else {
                    components.push(<ETA_Text key={i} text={data.content}/>);
                }

                continue;
            }

            components.push(<ETA_Text key={i} text={componentName}/>);
        }
    } else {
        return <ETA_Text text={data.content}/>;
    }

    return <CurrentComponent injected={components} components={data.components} type={data.type} name={data.name} {...data.props}/>;
}