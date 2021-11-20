import "./Opstelling.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fieldImage from "../assets/img/field.jpeg";
import PlayersList from "./PlayersList";
import PlayersDialog from './PlayersDialog';
import { PlayerItem } from "./PlayerItem";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { OpstellingItem } from "./OpstellingItem";
import { Button, CardActions, IconButton } from "@mui/material";
import CanvasDraw from "react-canvas-draw";
import Typography from '@mui/material/Typography';


function Opstelling(){

  const [opstelling, setOpstelling] = useState<OpstellingItem>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
 
  useEffect(() => {
    getPlayers();
  },[])

  const getPlayers = () => {
    console.log(id);
    axios.get<OpstellingItem>(`http://localhost:3001/opItems/${id}`)
    .then(resp => {
      console.log(resp.data);
      setOpstelling(resp.data);
    
    })
    .catch(err => console.log(err));
  }

  const deleteOpstelling = () =>{
      axios.delete(`http://localhost:3001/opItems/${id}`).then(() => history.push("/"))
      .catch(err => console.log(err))
  }

  const updatePlayerInOpstelling = (player: PlayerItem) => {
    console.log(player);
    var indexOfPlayerToUpdate: any = opstelling?.players.findIndex(p => p.id === player.id);
    
    if(opstelling !== undefined){
      opstelling.players[indexOfPlayerToUpdate] = player;
    }
    
    axios.put(`http://localhost:3001/opItems/${id}`, opstelling)
    .then(resp => getPlayers())
    .catch(err => console.log(err));
  }



return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <div>
        <PlayersList/>
    </div>
    
    <Button onClick={deleteOpstelling} style={{ borderRadius: "10px", backgroundColor: "#F77C64", marginTop: "30px", 
    marginLeft: "40px", display: "flex",
    flexWrap: "wrap",
    textAlign: "center",color:"#000000", fontSize:13,fontWeight: 400, textTransform:"inherit",
    justifyContent: "center",}} variant="outlined" color="inherit">Delete Opstelling</Button>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
        {opstelling && 
      <div>
       <div className="field">
       <CanvasDraw
       className="fieldimg"
       style={{ borderRadius: "10%", height: "850px", width:"600px" }}
          brushColor="rgba(155,12,60,0.3)"
          imgSrc={fieldImage}
        />
       
        <PlayersDialog id={1} x="50px" y="240px" alt="field" playerposition="Goalkeeper" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "50px" && p.y === "240px")}/>
        <PlayersDialog id={2} x="420px" y="30px" alt="field" playerposition="Right-Winger" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "420px" && p.y === "30px")}/>
        <PlayersDialog id={3} x="200px" y="240px" alt="field" playerposition="Centre-Back" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "200px" && p.y === "240px")}/>
        <PlayersDialog id={4} x="420px" y="460px" alt="field" playerposition="Centre-Forward" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "420px" && p.y === "460px")}/>
        <PlayersDialog id={5} x="320px" y="240px" alt="field" playerposition="Central-Midfield" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "320px" && p.y === "240px")}/>
        <PlayersDialog id={6} x="200px" y="50px" alt="field" playerposition="Right-Back" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "200px" && p.y === "50px")}/>
        <PlayersDialog id={7} x="200px" y="430px" alt="field" playerposition="Left-Back" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "200px" && p.y === "430px")}/>
        <PlayersDialog id={8} x="300px" y="120px" alt="field" playerposition="Attacking-Midfield"  updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "300px" && p.y === "120px")}/>
        <PlayersDialog id={9} x="300px" y="360px" alt="field" playerposition="Attacking-Midfield"  updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "300px" && p.y === "360px")}/>
        <PlayersDialog id={10} x="530px" y="70px" alt="field" playerposition="Right-Winger" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "530px" && p.y === "70px")}/>
        <PlayersDialog id={11} x="530px" y="420px" alt="field" playerposition="Left-Winger" updatePlayerInOpstelling={updatePlayerInOpstelling} player={opstelling.players.find(p => p.x === "530px" && p.y === "420px")}/>


        </div>
    </div>}
      </Grid>
    </Grid>
  </Box>
);
}
export default Opstelling;