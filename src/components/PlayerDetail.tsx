
import "./PlayerDetail.css"
import {Grid} from "@mui/material";
import { Box} from "@mui/system";
import Skills from "./Skills";
import PlayerInfo from "./PlayerInfo";

 function PlayerDetail(){
      return (
        <>
         <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1} columns={16}>
      <Grid style={{ paddingTop: "5%" , marginLeft: "20%"}} item xs={"auto"}>
      <div>
      <PlayerInfo/>
    </div>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={"auto"}>      
      <div>
      <Skills/>
        
    </div>
      </Grid>
    </Grid>
  </Box>
     </>
      );

}
export default PlayerDetail;