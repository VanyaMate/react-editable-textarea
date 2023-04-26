import {IETA_Data} from "../EditableTextarea/interfaces/eta-data.interface";

export const data: IETA_Data = {
    content: "Пост %%LINK_TO%%. Содержит список %%LIST_OF%%",
    props: {},
    components: {
        "LINK_TO": {
            content: "сюда",
            props: {
                url: "vk.com",
            },
            components: {},
            type: 'LINK',
        },
        "LIST_OF": {
            content: '',
            props: {
                list: [
                    "строка 1 %%LINK_TO_LIST_2%%",
                    "строка 2 %%LINK_TO_LIST_2%%",
                    "строка 3 %%введите имя%%",
                ],
            },
            components: {
                "LINK_TO_LIST_2": {
                    content: 'VK',
                    props: {
                        url: "list2.com",
                    },
                    components: {},
                    type: 'LINK',
                }
            },
            type: 'LIST',
        }
    },
    type: '__ROOT__',
}