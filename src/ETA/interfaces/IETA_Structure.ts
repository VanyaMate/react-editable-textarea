import {IETA_ComponentProps} from "./IETA_ComponentProps";
import {IETA_StructureComponents} from "./IETA_StructureComponents";

export interface IETA_Structure {
    content: string,
    props: IETA_ComponentProps,
    components: IETA_StructureComponents,
    type: string,
}