import React from "react";
import SumaryItem from "../../components/sumary-item";
import HighLight from "../../components/highlights";
import { SumaryUl } from "./styles";

const Sumary =()=>{
    return (
        <SumaryUl>
            <SumaryItem> Tiempo de estudio (horas) <HighLight color='--white'>40</HighLight></SumaryItem>
            <SumaryItem> Respuestas contestadas <HighLight color='--white'>370</HighLight></SumaryItem>
            <SumaryItem> Respuestas correctas <HighLight color='--green'>310</HighLight></SumaryItem>
            <SumaryItem> Respuestas incorrectas <HighLight color='--red'>60</HighLight></SumaryItem>
        </SumaryUl>
    )
}


export default Sumary
