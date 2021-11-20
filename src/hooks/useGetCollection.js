import {useEffect, useState} from 'react';
import axios from "axios";


export default function useGetCollection(url){
  const [error, setErorr] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  async function refetch(){
      setIsLoading(true)
    try {
      const { data} = await axios.get(url);
    setFetchedData(data);
    
    }
    catch(error){
     setErorr(true)
    }
    setIsLoading(false);
  }
    useEffect(() => {
      async function getData(){
        try {
          const { data} = await axios.get(url);
        setFetchedData(data);
        
        }
        catch(error){
         setErorr(true)
        }
        setIsLoading(false);
      }
      getData();
    }, [url]);



      return {
          loading,
          error,
          data: fetchedData,
          refetch,
      };
}

