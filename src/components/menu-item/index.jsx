import React from "react";
import { MenuItemAnchor, MenuItemList} from './styles'

const MenuItem =({children, to, isCurrent})=>{
    const arias = isCurrent && { "aria-current": "page" }

    return (
        <MenuItemList>
            <MenuItemAnchor color={isCurrent?'--green':'--white'} {...arias} to={to}>
                {children}
            </MenuItemAnchor>        
        </MenuItemList>
    )
}


export default MenuItem;