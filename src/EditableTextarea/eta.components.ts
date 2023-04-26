import {IETA_Components} from "./interfaces/eta-components.interface";
import ETA_Component_Text from "./components/ETA_Text";
import ETA_Root from "./components/ETA_Root";

export const ETA_Default: IETA_Components = {
    "__ROOT__": ETA_Root,
    "__TEXT__": ETA_Component_Text,
}
