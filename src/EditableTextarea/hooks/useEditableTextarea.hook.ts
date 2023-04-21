import {MutableRefObject, useCallback, useMemo, useRef, useState} from "react";

export interface IEditableStructurePoint<T> {
    data: IEditableStructurePoint<T>[] | IEditableStructurePoint<T> | string,
    type: T,
}

export interface IEditableTextareaProps {
    edit: boolean,
    value: string,
}

export interface IEditableTextareaOptions<T> {
    value: { get: () => string, set: (value: string) => void },
    edit: { value: boolean, set: (value: boolean) => void },
    edited: { value: boolean, set: (value: boolean) => void },
    structure: IEditableStructurePoint<T>,
}

export type EditableTextareaValue<T> = [
    MutableRefObject<HTMLDivElement|null>,
    IEditableTextareaOptions<T>,
]

export const useEditableTextarea = function<T> (props: IEditableTextareaProps): EditableTextareaValue<T> {
    const [currentValue, setCurrentValue] = useState<string>(props.value);
    const [editable, setEditable] = useState<boolean>(props.edit);
    const [edited, setEdited] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement|null>(null);

    const structure = useMemo<IEditableStructurePoint<T>>(() => {
        try {
            return { data: JSON.parse(currentValue), type: T.CONTAINER }
        }
        catch (_) {
            return { data: currentValue, type: T.CONTAINER }
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