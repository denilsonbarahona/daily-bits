const CircularProgress = (circle, percentage)=>{
    const radius = circle.r.baseVal.value;
    const circumference = radius*2*Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - percentage / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

export default CircularProgress