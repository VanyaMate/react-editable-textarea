import {IETA_Components} from "./interfaces/eta-components.interface";
import ETA_Component_Text from "./components/ETA_Text";
import ETA_Root from "./components/ETA_Root";
import ETA_Block from "./components/ETA_Block";
import ETA_Span from "./components/ETA_Span";

export const ETA_Default: IETA_Components = {
    "__ROOT__": ETA_Root,
    "__TEXT__": ETA_Component_Text,
    "__BLOCK__": ETA_Block,
    "__SPAN__": ETA_Span,
}
