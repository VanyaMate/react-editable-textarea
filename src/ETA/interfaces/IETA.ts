import {IETA_Structure} from "./IETA_Structure";
import {IETA_Components} from "./IETA_Components";

export interface IETA {
    editMode: boolean,
    structure?: IETA_Structure,
    text?: string,
    components?: IETA_Components
}