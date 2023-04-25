import React from 'react';
import {IEditableTextareaDataPoint} from "../types/EditableTextareaDataPoint";

export type InjectorLib = { [key: string]: React.FC };

export interface IComponentInjector extends IEditableTextareaDataPoint {
    lib: InjectorLib
}

const ComponentInjector: React.FC<IComponentInjector> = React.forwardRef<HTMLDivElement, IComponentInjector>((props, ref) => {


    return (
        <>

        </>
    );
});

export default React.memo(ComponentInjector);