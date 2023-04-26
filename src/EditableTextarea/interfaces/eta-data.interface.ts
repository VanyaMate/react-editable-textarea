export type ETA_Data_props = { [key: string]: any };

export interface IETA_Data {
    content: string,
    props: ETA_Data_props,
    components: {
        [key: string]: IETA_Data,
    },
    type: string,
}