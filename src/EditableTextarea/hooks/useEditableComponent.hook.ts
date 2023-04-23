import {MutableRefObject, useRef, useState} from "react";

export interface IUseEditableComponentProps {
    text: string,
}

export interface IUseEditableComponentOptions {
    text: { get: () => string, set: (text: string) => void },
}

export type EditableComponentValue = [
    MutableRefObject<HTMLDivElement|null>,
    IUseEditableComponentOptions,
]

export const useEditableComponent = function (props: IUseEditableComponentProps): EditableComponentValue {
    const [ text, setText ] = useState<string>(props.text);
    const ref = useRef<HTMLDivElement|null>(null);

    return [
        ref,
        {
            text: {
                get: () => ref.current?.textContent || text,
                set: setText
            }
        }
    ]
}