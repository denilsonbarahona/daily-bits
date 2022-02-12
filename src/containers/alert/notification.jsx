import React from "react";
import { Notification } from './styled'


const NotificationTitle = ({children, theme}) =>{
    return (
        <Notification theme={theme}>{children}</Notification>
    )
}

export default NotificationTitle;