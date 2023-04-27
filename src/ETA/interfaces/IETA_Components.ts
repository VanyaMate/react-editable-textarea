import {IETA_ComponentProps} from "./IETA_ComponentProps";
import React from "react";

export interface IETA_Components {
    [key: string]: {
        Component: React.FC<IETA_ComponentProps>,
    }
}