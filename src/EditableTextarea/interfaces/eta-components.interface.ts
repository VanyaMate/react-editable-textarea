import React from "react";
import {IETA_Data} from "./eta-data.interface";

export type ETA_ComponentInjectData = { injected: JSX.Element[] | string } & { components: { [key: string]: IETA_Data } } & { [key: string]: any }

export interface IETA_Components {
    [ key: string ]: React.FC<ETA_ComponentInjectData>
}