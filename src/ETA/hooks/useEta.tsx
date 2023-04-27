import {useRef, useState} from "react";
import {ETA_Props} from "../types/ETA_Props";

export const useEta = function (props: ETA_Props) {
    const { children, editMode, structure, components, text, ...other } = props;
    const [_editMode, setEditMode] = useState<boolean>(props.editMode);
    const ref = useRef<HTMLDivElement|null>(null);
    const methods = {
        getString: () => ref.current?.textContent,
        toggleEditMode: () => setEditMode(mode => !mode),
        getEditMode: () => _editMode,
    }

    const root = <div ref={ref} {...other}>
        { text }
    </div>

    return [root, methods];
}