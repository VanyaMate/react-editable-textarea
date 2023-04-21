import {MutableRefObject, useCallback, useMemo, useRef, useState} from "react";
import {EditableComponents} from "../editable-components.config";

export interface IEditableStructurePoint {
    struct: IEditableStructurePoint[] | IEditableStructurePoint | string,
    type: EditableComponents,
    data: any,
}

export interface IEditableTextareaProps {
    edit: boolean,
    value: string,
}

export interface IEditableTextareaOptions {
    value: { get: () => string, set: (value: string) => void },
    edit: { value: boolean, set: (value: boolean) => void },
    edited: { value: boolean, set: (value: boolean) => void },
    structure: IEditableStructurePoint,
}

export type EditableTextareaValue = [
    MutableRefObject<HTMLDivElement|null>,
    IEditableTextareaOptions,
]

export const useEditableTextarea = function (props: IEditableTextareaProps): EditableTextareaValue {
    const [currentValue, setCurrentValue] = useState<string>(props.value);
    const [editable, setEditable] = useState<boolean>(props.edit);
    const [edited, setEdited] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement|null>(null);

    const structure = useMemo<IEditableStructurePoint>(() => {
        try {
            return { struct: JSON.parse(currentValue), data: null, type: EditableComponents.CONTAINER }
        }
        catch (_) {
            return { struct: currentValue, data: null, type: EditableComponents.CONTAINER }
        }
    }, [currentValue]);

    const value = useCallback(() => {
        return currentValue;
    }, [structure]);

    return [
        ref,
        {
            value: { get: value, set: setCurrentValue },
            edit: { value: editable, set: setEditable },
            edited: { value: edited, set: setEdited },
            structure,
        },
    ]
}