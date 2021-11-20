import ProgressBar from "./ProgressBar";
import { Card, CardActions, CardContent, CardMedia, Grid, Paper, styled, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useGetPlayerData from "../hooks/useGetPlayerData";

function PlayerInfo(){
    const { id } = useParams<{ id: string }>();
    const { loading, error,data:items} = useGetPlayerData(`${id}`);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const useStyles = makeStyles({
        custom: {
          backgroundColor: "#4ACA9D",
          borderRadius: 34
        }
      });
     
      const classes = useStyles();
    return (
        <Card className={classes.custom} sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        height="400"
        image={items?.profileImage}
        alt={items?.firstname+" "+items?.lastname}
      />
          <CardContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Grid item xs={6}>
        <h3>naam</h3>
        <Item>{items?.firstname+" "+items?.lastname}</Item>
      </Grid>
      <Grid item xs={6}>
      <h3>leeftijd</h3>
        <Item>{items?.leeftijd}</Item>
      </Grid>
      <Grid item xs={6}>
      <h3>gewicht</h3>
        <Item>{items?.gewicht}</Item>
      </Grid>
      <Grid item xs={6}>
      <h3>lengte</h3>
        <Item>{items?.lengte}</Item>
      </Grid>
    </Grid>
          </CardContent>
    </Card>
    );
}
export default PlayerInfo;