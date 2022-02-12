import React from "react";
import {IconStyle} from './styles';
import {icons} from '../../utils/set-icons';

const Icon = ({iconType})=>{
    
    return <IconStyle aria-hidden="true" icon={icons[iconType]} />
}

export default Icon
