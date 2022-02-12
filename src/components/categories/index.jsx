import React from 'react';
import Progress from '../progress';
import {Container, CircularContainer, Image} from '../categories/styles';
import { useLocation } from "react-router-dom";


const Categories =({URL, title, Click})=>{

    const params = useLocation()
    const { progress=0, category=''} = params.state || ''
 
    return ( 
            <Container  onClick={()=>Click(title)}
                        tabIndex={0} 
                        aria-label={title}>
                <CircularContainer>
                    <Progress type="circle" progress={category === title?progress:0}/>
                    <Image src={URL} alt={title} width='54' height='54'/>
                </CircularContainer> 
                <p>{title}</p>
            </Container>
    )
}

export default Categories;