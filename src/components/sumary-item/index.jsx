import React from "react";
import { SumaryLi } from "./styles";

const SumaryItem =({children})=>{
    return (
        <SumaryLi>{children}</SumaryLi>
    )
}

export default SumaryItem;