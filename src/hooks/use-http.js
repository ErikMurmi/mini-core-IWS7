 
import { useState , useCallback } from 'react'
 
const useHttp = () =>{

    const [ isLoading , setIsLoading ] = useState(false)
    const [error, setError] = useState(null);

    const http = 'https://emminicoreiw7.vercel.app'

    const sendRequest = useCallback( async (requestConfig , applyData) => {
        setIsLoading(true)
        setError(null);
        try {
            
            const response = await fetch(
                http + requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body : requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if(!response){
                throw new Error('Request failed!'); 
            }

            const data = await response.json()
            applyData(data)

        } catch (e) {
            setError(e.message || 'Something went wrong!')
        }
    });

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp ;