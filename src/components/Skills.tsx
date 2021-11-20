import ProgressBar from "./ProgressBar";
import { Box, Card, CardContent, Grid, Paper, styled, Theme, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useGetPlayerData from "../hooks/useGetPlayerData";


const useStyles = makeStyles((theme:Theme) => ({
  skills: {
    color: "black",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#F77C64",
      borderRadius: 34,
      marginLeft: "40px",
      marginRight:"40px"
    
     
    },
    [theme.breakpoints.between("sm", "md")]: {
      backgroundColor: "#F77C64",
      borderRadius: 34,
      marginLeft: "40px",
      marginRight:"40px"
     

     
    },
    "@media (min-width: 1280px)": {
      backgroundColor: "#F77C64",
      borderRadius: 34,
      marginLeft: "30px"
    }

  }
}));

function Skills(){
    const { id } = useParams<{ id: string }>();
    const { loading, error,data:items} = useGetPlayerData(`${id}`);
    const classes = useStyles();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <Card className={classes.skills} sx={{ maxWidth: 500 }}>

          <CardContent>
         

   
    <Typography variant="h2" component="div" sx={{ flexGrow: 1 ,textAlign: "center"}}>
        Skills
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <h3>verdedeging</h3>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
        <ProgressBar value={items?.verdedeging || 0 }/>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <h3>Pass</h3>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <ProgressBar value={items?.pass || 0 }/>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <h3>Goals</h3>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <Item>{items?.goals}</Item>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <h3>positie</h3>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <Item>{items?.position}</Item>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <h3>aantal matches</h3>
      </Grid>
      <Grid style={{ paddingTop: "5%" }} item xs={8}>
      <Item>{items?.aantalmatch}</Item>
      </Grid>
    </Grid>
  </Box>
    
          </CardContent>
    </Card>
    );
}
export default Skills;