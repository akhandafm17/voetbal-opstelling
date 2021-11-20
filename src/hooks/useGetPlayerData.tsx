import {useEffect, useState} from 'react';
import axios from "axios";
import { PlayerItem } from '../components/PlayerItem';


export default function useGetCollection(id: string){
  const [error, setErorr] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState<PlayerItem>();
  //const { id } = useParams<{ id: string }>();


    useEffect(() => {
        async function getDataById(id:string){
          try {
            const {data}: any = await axios.get<PlayerItem>(`/players/${id}`).then((res) => {
                  setFetchedData(res.data);
        });
            console.log(data)
          
          }
          catch(error){
            setErorr(true)
          }
          setIsLoading(false);
          
        }
        getDataById(id);
      }, [id]);



      return {
          loading,
          error,
          data: fetchedData,
      };
}

