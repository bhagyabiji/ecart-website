import { useEffect, useState } from "react"


//creating a hook
const useFetch = (url)=> {
    const [data, setData] = useState([])

    //usestate - returns an array of state and the fuction to change the state whereas usefetch returns the data
    useEffect(()=> {

        fetch(url).then((res)=>{
        
        //data need to be parse so using json
        res.json().then((result)=> {
            setData(result.products)
        })
    }).catch((err)=> console.log(err))
    },[])

    return data 
}

export default useFetch

