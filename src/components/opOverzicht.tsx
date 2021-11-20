import useGetCollection from "../hooks/useGetCollection";
import OpOverzichtItem from "./opOverzichtItem";
import { useParams } from "react-router-dom";
import '../opOverzicht.css';
import { Box, CircularProgress, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Oops from "./oops";

export interface Item {
    id: number;
    name: string;
    image: string;
    likes: number;
    share: string;
    liked: boolean;
  }
  

function OpOverzicht(){
  const { id } = useParams<{ id: string }>();
    const {
        loading,
        error,
        data: items,
      } = useGetCollection(`/opOverzicht/${id}/opItems`)
      const [query, setQuery] = useState("");
    
      if (loading) return   (
        <CircularProgress sx={{ display: "block", mt: "10em", mx: "auto" }} />
      );
      if (error)  return <Oops/>

    
    return (
        <>
        <div className="opOverzicht">
        <Box
        sx={{
          display:"table",
          margin:"0 auto"
        }}
      >
       <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center',  backgroundColor: "#F77C64",
      marginLeft: "20px",
      marginBottom: "20px",
      width: 300,
      maxWidth: 400,
      maxHeight: 50,
      borderRadius: "20px",
      textAlign: "center",
      marginTop: "10%",
     }}
      
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1, marginLeft:"20px"}}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
      </Box>
        
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          flexWrap: "wrap",
          marginTop: "5%"
        }}
      >
          
            {
              items.filter((item: Item) => item.name.toLowerCase().includes(query.toLowerCase())).length>0?
              items.filter((item: Item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item: Item) => (
             <OpOverzichtItem item={item} key={item.id}></OpOverzichtItem>
               )):<img className="noitems"src="https://www.ibellstore.com/images/no-item-found-here.png" alt="noitems"/>
            }
             </Box>
        </div>
        </>
    )

}

export default OpOverzicht;
