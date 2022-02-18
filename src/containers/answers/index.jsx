import React,{useRef} from "react";
import ActionDisplay from "@layouts/accion-display";

const Answers =({Layout, Component, Partner, items })=>{

    return function AnswerWithData(){

        const ref = useRef(null)
        const [answerState, setAnswer] = React.useState({answer:'', sumary:'base'})

        return (
            <Layout>
                {Partner && <Partner ref={ref} ></Partner>}
                {items.map((item, key)=>(
                    <Component 
                            key={key}
                            setAnswer={setAnswer}
                            answerState={answerState} 
                            partnerRef={ref}
                            {...item} > 
                    </Component>
                ))}
                
                <ActionDisplay 
                        answerState={answerState} 
                        setAnswer={setAnswer} />
            </Layout>
        )
    }
   
}

export default Answers