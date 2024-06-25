/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async ()=>{
       try{
        const response = await fetch(url);
        if(response.status === 200){
            setData(response.data.data)
        }
        else{
            setError("Something went wrong");
        }
       }catch(error){
        setError("Something went wrong");
       }finally{
        setLoading(false);
       }
    }
    useEffect(()=>{
fetchData()
    },[])
    return {data, loading, error}
}

export default useFetch