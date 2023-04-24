import {EditablePostComponentsIds} from "./editable-textarea-posts.ids";
import {
    EditableTextareaComponentsIds
} from "../EditableTextarea/types/editable-textarea.ids";
import {IEditableTextareaDataPoint} from "../EditableTextarea/types/EditableTextareaDataPoint";

export const data: IEditableTextareaDataPoint = {
    props: {
        text: "Перейти %%LINK_TO%% чтобы настроить список %%LIST_OF%%",
    },
    components: {
        "LINK_TO": {
            props: {
                text: "сюда",
                url: "vk.com",
            },
            components: {},
            type: EditablePostComponentsIds.LINK,
        },
        "LIST_OF": {
            props: {
                text: '',
                list: [
                    "строка 1",
                    "строка 2 %%LINK_TO_LIST_2%%",
                    "строка 3",
                ],
            },
            components: {
                "LINK_TO_LIST_2": {
                    props: {
                        text: "сюда",
                        url: "list2.com",
                    },
                    components: {},
                    type: EditablePostComponentsIds.LINK,
                }
            },
            type: EditablePostComponentsIds.LIST,
        }
    },
    type: EditableTextareaComponentsIds.ROOT,
}