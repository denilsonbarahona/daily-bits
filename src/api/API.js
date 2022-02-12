const BASE_API ='http://localhost:1337/api/';

const DO_REQUEST = async(SECTION) => {
    try {
        const rawData = await fetch(`${BASE_API}${SECTION}`)
        const data = await rawData.json()

        return {data: data.data, error: false, edescription: ''}
    }catch (e){
        return {data: '', error: true, edescription: e}
    }
}

export const COMPLEX_REQUEST = async(SECTION, METHOD, sending={}) =>{
    try{
        const rawData = await fetch(`${BASE_API}${SECTION}`,{
            method: METHOD,
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(sending),
        })
        const data = await rawData.json(); 
        return {data: data, error: false, edescription: '' }
    } catch (e) { 
        return {data: '', error: true, edescription: e}
    }
}


export default DO_REQUEST;