import {IEditableTextareaDataPoint} from "../types/EditableTextareaDataPoint";
import {InjectorLib} from "../components/ComponentInjector";
import React from "react";
import {EditableTextareaComponents} from "../types/editable-textarea.components";
import EditableTextareaText from "../components/EditableTextareaText";

const entityTextareaDataRegexp = /%%(.*?)%%/g;


const getComponents = function (data: IEditableTextareaDataPoint, lib: InjectorLib ): JSX.Element[] {
    const batches = data.props.text.split(entityTextareaDataRegexp);
    const result: JSX.Element[] = [];

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        const DefaultComponent = EditableTextareaComponents[batch];
        const UserComponent = lib[batch];

        if (!!DefaultComponent) {
            result.push(<DefaultComponent data={data}/>);
        } else if (!!UserComponent) {
            result.push(<UserComponent data={data}/>);
        } else {
            result.push(<EditableTextareaText data={data}/>);
        }
    }

    return result;
}

export const useComponentInjector = function (text, components) {
    return getComponents(text, components);
}