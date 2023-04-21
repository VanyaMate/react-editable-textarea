/**
 * Лучше вручную задать ID для enum, чтобы не было привязки к порядку
 */
export enum EditableComponents {
    /**
     * Зарезервированные
     */
    CONTAINER = 'container',        // Зарезервировано для внутреннего компонента EditableContainer
    TEXT = 'text',                  // Зарезервировано для внутреннего компонента EditableText

    /**
     * Дополнительные
     */
    LINK = 'link',
    LIST = 'list',
}
