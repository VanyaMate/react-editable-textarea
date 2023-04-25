import {EditableTextareaComponentsIds} from "./editable-textarea.ids";
import EditableTextareaRoot from "../components/EditableTextareaRoot";
import EditableTextareaText from "../components/EditableTextareaText";
import React from "react";

export const EditableTextareaComponents: { [key: string]: React.FC } = {
    "ROOT": EditableTextareaRoot,
    "TEXT": EditableTextareaText,
}