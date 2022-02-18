import React, { useEffect } from "react";
import {BarSvg, Rect, CircleSvg, CircleInner, CircleOuter, ProgressContainer} from './styles'
import CircularProgress from "@utils/init-circular-progress";

const Progress =({type, progress})=>{

    const ref = React.useRef(null)

    useEffect(()=>{
        if(type !== 'bar')
            CircularProgress(ref.current, progress)
    },[ref])


    return (
        <ProgressContainer  role="progressbar" aria-label="progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
            { type === 'bar'
                    ?<BarSvg>       
                        <Rect inline='inherit' rx="6" ry="6" fill="--white"/>
                        <Rect inline={`${progress}%`} rx="6" ry="6" fill="--green"/>
                    </BarSvg>
                    :<CircleSvg>
                        <CircleOuter r="38" cx="48" cy="48"/>
                        <CircleInner ref={ref} r="38" cx="48" cy="48"/>
                    </CircleSvg> }    
        </ProgressContainer>
    )
}

export default Progress
