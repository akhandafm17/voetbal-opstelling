
import * as React from 'react';
import "./MediaCard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFullIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MediaCard({item}) {
  const [like,setLike] = useState(item.likes);
  const [liked,setLiked] = useState(item.liked);
  

  
  const options = { 
    type: toast.TYPE.SUCCESS,
};

  function share(){
    toast.dark("Copied to Clipboard", options)
    console.log(window.location.href+`opItems/${item.id}`)
    navigator.clipboard.writeText(window.location.href+`opItems/${item.id}`)
  }

  function toggleLike(){
    if(liked){
      setLiked(false);
      setLike(like-1)
    }
    else{
      setLiked(true);
      setLike(like+1)
    }
  }
  const history = useHistory();
  axios.put(`/opItems/${item.id}`, {
    id: item.id,
    opOverzicht: 1,
    name: item.name,
    image: item.image,
    likes:like,
    share: item.share,
    players: item.players,
    liked: liked
   });

   const useStyles = makeStyles({
    custom: {
      backgroundColor: "#4ACA9D",
      borderRadius: 34
    }
  });
  const classes = useStyles();

  

  return (
    <>
      <Card className={classes.custom} sx={{ maxWidth: 300 }}>
      <div
      style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  paddingTop: "10px"
                }}>
      <CardMedia
      style={{
        width: "auto",
        maxHeight: "200px"
      }}
        component="img"
        height="220"
        image={item.image}
        alt={item.name}
        onClick={() => history.push(`opItems/${item.id}`)}
      />
      </div>
      <CardContent>
        <Typography style={{ fontWeight: 600 }} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton onClick={toggleLike}>
        { !liked
        ? <FavoriteIcon color="warning"/>
        : <FavoriteFullIcon color="warning"/>
        }
        &nbsp;
        <Typography gutterBottom variant="subtitle1" component="div">
          {like}
        </Typography>
      </IconButton>
      <IconButton style={{ marginLeft: "auto", paddingRight: "20px"}} onClick={share}>
        <ShareIcon color="info"/>
      </IconButton>
      <ToastContainer className="toast" position="bottom-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover />
      </CardActions>
    </Card>
    
  </>
  );
}