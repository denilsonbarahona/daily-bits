import React from "react";
import {PageStyled} from './styles'

const Page = ({children}) => {
    return (
        <PageStyled>
            {children}
        </PageStyled>
    )
}

export default Page