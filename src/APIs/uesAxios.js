import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [finish, setFinish] = useState(false);

    const fetchData = () => {
        setFinish(false);
        if(url){
            console.log("fetchData", url);
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                console.log("response",response);
                setResponse(res.data);
            })
            .catch((err) => {
                console.log("err",err);
                setError(err);
            })
            .finally(() => {
                setFinish(true);
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, finish };
};

export default useAxios;