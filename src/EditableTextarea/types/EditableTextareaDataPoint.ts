type propsType = { text: string } & { [key: string]: any };

export interface IEditableTextareaDataPoint {
    props: propsType,
    components: {
        [key: string]: IEditableTextareaDataPoint,
    },
    type: string,
}