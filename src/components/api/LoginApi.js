import React, {useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";

export default function LoginApi(mobile_number, password) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);


    useEffect(()=>{
        var getApiData = async () => {
            await fetch(process.env.REACT_APP_API_BASE_URL + "api/v1/auth/signin", {
                method: 'POST',
                body: "param1=value1&param2=value2"
            }).then(res => res.json()).then(
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

