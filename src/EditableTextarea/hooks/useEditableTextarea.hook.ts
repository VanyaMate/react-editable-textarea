import {MutableRefObject, useCallback, useMemo, useRef, useState} from "react";

export interface IEditableTextareaProps {
    edit: boolean,
    value: string,
}

export interface IEditableTextareaOptions {
    value: { get: () => string, set: (value: string) => void },
    edit: { value: boolean, set: (value: boolean) => void },
    structure: string,
}

export type EditableTextareaValue = [
    ref: MutableRefObject<HTMLDivElement|null>,
    IEditableTextareaOptions,
]

export const useEditableTextarea = function (props: IEditableTextareaProps): EditableTextareaValue {
    const [currentValue, setCurrentValue] = useState<string>(props.value);
    const [editable, setEditable] = useState<boolean>(props.edit);
    const ref = useRef<HTMLDivElement|null>(null);

    const structure = useMemo(() => {
        return `structure ${ currentValue } !`;
    }, [currentValue]);

    const value = useCallback(() => {
        return currentValue;
    }, [structure]);

    return [
        ref,
        {
            value: { get: value, set: setCurrentValue },
            edit: { value: editable, set: setEditable },
            structure,
        }
    ]
}