import {EditableComponents} from "../editable-components.config";


export class Struct {
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

    static _getElementAttributes (element) {
        return {
            type: element.getAttribute('data-editable-component-type'),
            data: element.getAttribute('data-editable-component-data'),
        }
    }
}