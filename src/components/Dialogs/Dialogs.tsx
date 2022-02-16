import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {DialogPropsType} from "../../App";

type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs