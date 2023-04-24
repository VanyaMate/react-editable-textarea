import {EditableTextareaComponentsIds} from "../types/editable-textarea.ids";
import {IEditableTextareaDataPoint} from "../types/EditableTextareaDataPoint";
import {InjectorLib} from "../components/ComponentInjector";
import React from "react";

const entityTextareaDataRegexp = /%%(.*?)%%/g;


const getComponents = function (data: IEditableTextareaDataPoint, lib: InjectorLib ): React.FC[] {
    const batches = data.props.text.split(entityTextareaDataRegexp);
    const result: React.FC[] = [];

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        const defaultComponent = EditableTextareaComponentsIds[batch];

        if (!!defaultComponent) {

        }
    }

    return result;
}

export const useComponentInjector = function (text, components) {
    return getComponents(text, components);
}