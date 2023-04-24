import {useRef} from "react";
import {IEditableTextareaDataPoint} from "../types/EditableTextareaDataPoint";
import ComponentInjector from "../components/ComponentInjector";

export interface IUseEditableTextareaProps {
    data: IEditableTextareaDataPoint,
    edit: boolean,
    components: {},
}

export interface IUseEditableTextareaText {
    edit: boolean,
    text: string,
}

export const useEditableTextarea = function (props: IUseEditableTextareaProps) {
    const root = ComponentInjector()

    const methods = {
        getState: () => console.log('return props'),
        toggleEdit: () => console.log('toggled'),
    };

    return [root, methods];
}
