import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import Categories from '../../components/categories';
import {Container} from './styles';
import AppContext from "../../context";

const CategoriesContainer =()=>{
    const {state} = useContext(AppContext)
    const navigate = useNavigate()

    const GoToGame=(title)=>{
        navigate(`/game/${title}`)
    }

    return (
        <Container>
            {state.categories.map(category=>(
                    <Categories key={category.id} 
                                Click={GoToGame}
                                URL={category.attributes.image} 
                                title={category.attributes.title} />
                ))}      
        </Container>
    )
}

export default CategoriesContainer;