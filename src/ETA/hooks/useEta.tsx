import {useRef, useState} from "react";
import {ETA_Props} from "../types/ETA_Props";
import ETA_Middleware from "../components/ETA_Middleware";
import {ETA_ComponentsContext} from "../context/ETA_ComponentsContext";

export const useEta = function (props: ETA_Props) {
    const { children, editMode, structure, components, text, ...other } = props;
    const [_editMode, setEditMode] = useState<boolean>(props.editMode);
    const ref = useRef<HTMLDivElement|null>(null);

    const methods = {
        getCurrentStructure: () => 'structure',
        setEditMode: setEditMode,
        toggleEditMode: () => setEditMode(mode => !mode),
    }

    const root = (
        <div ref={ref} {...other} eta-type={'__ROOT__'}>
            <ETA_ComponentsContext.Provider value={components || null}>
                {
                    !!text
                        ? <ETA_Middleware type={'__TEXT__'} content={text} components={{}} props={{}}/>
                        : <ETA_Middleware {...structure}/>
                }
            </ETA_ComponentsContext.Provider>
        </div>
    );

    return [root, methods];
}