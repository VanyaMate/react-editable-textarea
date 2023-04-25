import {useRef, useState} from "react";
import {IEditableTextareaDataPoint} from "../types/EditableTextareaDataPoint";
import ComponentInjector from "../components/ComponentInjector";

export interface IUseEditableTextareaProps {
    data: IEditableTextareaDataPoint,
    edit: boolean,
    components: {},
}

export const useEditableTextarea = function (props: IUseEditableTextareaProps) {
    const [edit, setEdit] = useState<boolean>(props.edit);
    const root = ComponentInjector()

    const methods = {
        getState: () => console.log('return props'),
        toggleEdit: () => setEdit((mode) => !mode),
    };

    return [root, methods];
}
