import {EditableComponents} from "../editable-components.config";


export class Struct {
    static ATTRIBUTE_COMPONENT = 'data-editable-component';
    static ATTRIBUTE_TYPE = 'data-editable-component-type';
    static ATTRIBUTE_DATA = 'data-editable-component-data';

    static getStructByJson (json: string) {
        try {
            return { data: JSON.parse(json), type: EditableComponents.CONTAINER };
        }
        catch (_) {
            return { data: json, type: EditableComponents.CONTAINER };
        }
    }

    static getStructByElement (element: Element) {
        const { type, data } = Struct._getElementAttributes(element);

    }

    private static _getElementAttributes (element) {
        return {
            type: element.getAttribute(Struct.ATTRIBUTE_TYPE),
            data: element.getAttribute(Struct.ATTRIBUTE_DATA),
        }
    }
}