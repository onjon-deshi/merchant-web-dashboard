import React, {useEffect, useState, useContext} from 'react'
import ApiContext from './../../contexts/ApiContext';

export default function GetInfo() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);


    

    useEffect(()=>{
        
        var getApiData = async () => {
            await fetch("http://localhost:4000/api").then(res => res.json()).then(
                (result)=>{
                    setIsLoaded(true);
                    setApiData(result);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            );
        }

        getApiData();
    }, []);


    if(error) {
        return (<>Error : {error.message}</>);
    }
    else if(isLoaded !== true) {
        return (<>Loading...</>)
    }
    else {
        return (
            <div className='py-2'>
                {apiData.status === undefined ? "No status found" : `Status: ` +  apiData.status }
                <br/>
                {apiData.message === undefined ? "No message found." : "Message : " + apiData.message }
                <br/>
                {apiData.user === undefined ? "No user found." : "Users Information : " + JSON.stringify(apiData.user) }
            </div>
        );
    }

}
